import { Router } from "express";
import { create, findAll, topNews, searchByTitle, byUser, findById, update } from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const route = Router();

route.post("/", authMiddleware, create);
route.get("/", findAll);
route.get("/top", topNews);
route.get("/search", searchByTitle);
route.get("/byUser", authMiddleware, byUser);
route.get("/:id", authMiddleware, findById);
route.patch("/:id", authMiddleware, update);

export default route;