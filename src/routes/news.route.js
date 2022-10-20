import { Router } from "express";
import { create, findAll, topNews } from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const route = Router();

route.post("/", authMiddleware, create);
route.get("/", findAll);
route.get("/top", topNews);
route.get("/:id", findById);

export default route;