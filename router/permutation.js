const express = require("express");
const {
  createPermutation,
  getAllPermutations,
  getPermutationByID,
  deletePermutation,
  updatePermutation,
} = require("../controllers/permutation.controller");

const router = express.Router();

router.post("/", createPermutation);

/*
@method: GET
@ path:http:localhost:4000/api/permutation/
@ parameter
public
*/
router.get("/", getAllPermutations);

/*
@method: GET
@ path:http:localhost:4000/api/permutation/:id
@ parameter
public
*/
router.get("/:id", getPermutationByID);

/*
@method: DELETE
@ path:http:localhost:4000/api/permutation/:id
@ parameter
public
*/
router.delete("/:id", deletePermutation);

/*
@method: PUT
@ path:http:localhost:4000/api/permutation/:id
@ parameter: body 
public
*/
router.put("/:id", updatePermutation);

module.exports = router;
