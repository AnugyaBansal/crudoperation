const express = require("express")
const router = express.Router()
const Controller = require("../controllers/crud")
//all the endpoints
router.post("/create", Controller.createUser)
router.get("/getUser/:userId", Controller.getUser)
router.put("/updateUser/:userId", Controller.updateDetails)
router.delete("/deleteUser/:userId", Controller.deleteDetails)

module.exports = router;