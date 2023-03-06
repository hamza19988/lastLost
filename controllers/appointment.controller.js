const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment({ ...req.body });
    await newAppointment.save();
    res
      .status(200)
      .send({ msg: "Appointment add", Appointment: newAppointment });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: " faild to create Appointment" }] });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    let AppointmentList = await Appointment.find();

    res
      .status(200)
      .send({ msg: "get all the Appointments", Appointments: AppointmentList });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get all Appointments" }] });
  }
};

exports.getAppointmentByID = async (req, res) => {
  try {
    let AppointmentToFind = await Appointment.findById(req.params.id);
    res
      .status(200)
      .send({ msg: "get Appointment by id", Appointment: AppointmentToFind });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get Appointment" }] });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete success" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "delete faild" }] });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const result = await Appointment.updateOne(
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
