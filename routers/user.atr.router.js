const router = require("express").Router();
const userAtrController = require('../controller/user.atr.controller')

router.post("/createUserAtr",userAtrController.createUserAtr);

router.post("/getUserAtrList",userAtrController.getUserAtrList)

router.post("/deleteUserAtr",userAtrController.deleteUserAtr)

module.exports = router;