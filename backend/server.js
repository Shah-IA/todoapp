const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoute");

const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("Error"));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
