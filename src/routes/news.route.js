import { Router } from "express";

const route = Router();

route.post("/", newsController.create);

export default route;