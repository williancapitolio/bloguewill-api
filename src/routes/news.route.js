import { Router } from "express";

const route = Router();

route.post("/", newsController.create);
route.get("/", newsController.findAll);

export default route;