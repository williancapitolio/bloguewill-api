import { Router } from "express";
import { create, findAll, topNews, searchByTitle, findById } from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const route = Router();

route.post("/", authMiddleware, create);
route.get("/", findAll);
route.get("/top", topNews);
route.get("/search", searchByTitle);
route.get("/:id", authMiddleware, findById);

export default route;