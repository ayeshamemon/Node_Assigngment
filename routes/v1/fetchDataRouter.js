const express = require("express");
const FetchDataController = require("../../controllers/fetchDataController");
const fetchDataRouter = express.Router();

const fetchDataController = new FetchDataController();

//making a get request to get sorted age
fetchDataRouter.get("/get_sorted_age", fetchDataController.sortByAge);

//making a get request to get sum
fetchDataRouter.get("/get_sum", fetchDataController.getSum);

module.exports = fetchDataRouter;
