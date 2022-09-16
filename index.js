require("dotenv").config();
const express = require("express");
const app = express();
const connectDatabase = require("./src/database/db");

const userRoute = require("./src/routes/user.route");

const port = process.env.PORT || 3001;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));