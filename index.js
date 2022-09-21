import * as dotenv from "dotenv";
dotenv.config()

import express from "express";
import connectDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));