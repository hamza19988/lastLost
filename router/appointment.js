const express = require("express");
const {
  createAppointment,
  getAllAppointments,
  getAppointmentByID,
  deleteAppointment,
  updateAppointment,
} = require("../controllers/appointment.controller");

const router = express.Router();

router.post("/", createAppointment);

/*
@method: GET
@ path:http:localhost:4000/api/Appointment/
@ parameter
public
*/
router.get("/", getAllAppointments);

/*
@method: GET
@ path:http:localhost:4000/api/Appointment/:id
@ parameter
public
*/
router.get("/:id", getAppointmentByID);

/*
@method: DELETE
@ path:http:localhost:4000/api/Appointment/:id
@ parameter
public
*/
router.delete("/:id", deleteAppointment);

/*
@method: PUT
@ path:http:localhost:4000/api/Appointment/:id
@ parameter: body 
public
*/
router.put("/:id", updateAppointment);

module.exports = router;
