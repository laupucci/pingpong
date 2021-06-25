const { Router } = require("express");

const userRouter = require("./user");
const matchRouter = require("./match");
const router = Router();

router.use("/users", userRouter);
router.use("/match", matchRouter);

module.exports = router;