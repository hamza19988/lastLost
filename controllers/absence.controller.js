const Absence = require("../models/Absence");

exports.createAbsence = async (req, res) => {
  try {
    const newAbsence = new Absence({ ...req.body });
    await newAbsence.save();
    res.status(200).send({ msg: "Absence add", Absence: newAbsence });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: " faild to create Absence" }] });
  }
};

exports.getAllAbsences = async (req, res) => {
  try {
    let AbsenceList = await Absence.find().populate("userId");

    res
      .status(200)
      .send({ msg: "get all the Absences", Absences: AbsenceList });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get all Absences" }] });
  }
};

exports.getAbsenceByID = async (req, res) => {
  try {
    let AbsenceToFind = await Absence.findById(req.params.id);
    res.status(200).send({ msg: "get Absence by id", Absence: AbsenceToFind });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get Absence" }] });
  }
};

exports.deleteAbsence = async (req, res) => {
  try {
    await Absence.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete success" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "delete faild" }] });
  }
};

exports.updateAbsence = async (req, res) => {
  try {
    const result = await Absence.updateOne(
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
