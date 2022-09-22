import { Router } from "express";

const route = Router();

route.post("/", authController.login);

export default route;