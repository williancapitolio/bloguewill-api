import { Router } from "express";
import newsController from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const route = Router();

route.post("/", authMiddleware, newsController.create);
route.get("/", newsController.findAll);

export default route;