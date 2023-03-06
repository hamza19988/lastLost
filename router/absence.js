const express = require("express");
const {
  createAbsence,
  getAllAbsences,
  getAbsenceByID,
  deleteAbsence,
  updateAbsence,
} = require("../controllers/absence.controller");

const router = express.Router();

router.post("/", createAbsence);

/*
@method: GET
@ path:http:localhost:4000/api/Absence/
@ parameter
public
*/
router.get("/", getAllAbsences);

/*
@method: GET
@ path:http:localhost:4000/api/Absence/:id
@ parameter
public
*/
router.get("/:id", getAbsenceByID);

/*
@method: DELETE
@ path:http:localhost:4000/api/Absence/:id
@ parameter
public
*/
router.delete("/:id", deleteAbsence);

/*
@method: PUT
@ path:http:localhost:4000/api/Absence/:id
@ parameter: body 
public
*/
router.put("/:id", updateAbsence);

module.exports = router;
