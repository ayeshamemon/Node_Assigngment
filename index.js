const express = require("express");
const env = require("dotenv");
const { urlencoded } = require("express");
const rootRouter = require("./routes");

env.config();
const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", rootRouter);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
