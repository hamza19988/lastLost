const Permutation = require("../models/Permutation");

exports.createPermutation = async (req, res) => {
  try {
    const newPermutation = new Permutation({ ...req.body });
    await newPermutation.save();
    res
      .status(200)
      .send({ msg: "Permutation add", Permutation: newPermutation });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: " faild to create Permutation" }] });
  }
};

exports.getAllPermutations = async (req, res) => {
  try {
    let permutationList = await Permutation.find().populate("author");

    res
      .status(200)
      .send({ msg: "get all the permutations", permutations: permutationList });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get all permutations" }] });
  }
};

exports.getPermutationByID = async (req, res) => {
  try {
    let permutationToFind = await Permutation.findById(req.params.id);
    res
      .status(200)
      .send({ msg: "get permutation by id", permutation: permutationToFind });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get permutation" }] });
  }
};

exports.deletePermutation = async (req, res) => {
  try {
    await Permutation.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete success" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "delete faild" }] });
  }
};

exports.updatePermutation = async (req, res) => {
  try {
    const result = await Permutation.updateOne(
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
