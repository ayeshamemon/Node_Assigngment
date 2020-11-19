const express = require("express");
const fetchDataRouter = require("./v1/fetchDataRouter");
const rootRouter = express.Router();

rootRouter.use("/v1/", fetchDataRouter);
//404 error for all other requests
rootRouter.all("/*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});
module.exports = rootRouter;
