const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
require("dotenv").config();

connectDB();

app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/permutation", require("./router/permutation"));
app.use("/api/appointment", require("./router/appointment"));
app.use("/api/absence", require("./router/absence"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app running on port ${port}..`);
});
