const User = require("../models/User");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }
    // new user
    const newUser = new User({ ...req.body });

    // hashage password
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;
    //then we save user
    await newUser.save();

    // CRRE UN TOKEN
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    // response
    res.status(200).send({ msg: "register succ", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "user not saved" }] });
  }
};

exports.Login = async (req, res) => {
  try {
    // email & password
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    // bad credential
    if (!findUser) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    // test password
    const comparePass = await bcrypt.compare(password, findUser.password);
    // bad crential
    if (!comparePass) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    // CREE UN TOKEN
    const token = jwt.sign(
      {
        id: findUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).send({ msg: "login successfully", user: findUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "can not login" }] });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let userList = await User.find();

    res.status(200).send({ msg: "get all the users", users: userList });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get all users" }] });
  }
};

exports.getUserByID = async (req, res) => {
  try {
    let userToFind = await User.findById(req.params.id);
    res.status(200).send({ msg: "get user by id", user: userToFind });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get user" }] });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete success" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "delete faild" }] });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    if (result.modifiedCount) {
      return res.status(200).send("updated");
    }
    res.status(200).send({ msg: "no modification" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to update" }] });
  }
};
