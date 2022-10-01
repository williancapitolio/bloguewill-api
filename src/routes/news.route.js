import { Router } from "express";
import newsController from "../controllers/newsController.js";

const route = Router();

route.post("/", newsController.create);
route.get("/", newsController.findAll);

export default route;