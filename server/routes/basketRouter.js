import { Router } from "express";
import basketController from "../controllers/basketController.js";
import CheckAuth from "../utils/checkAuth.js";
const router = new Router();

router.post("/", CheckAuth, basketController.addItem);
router.get("/", CheckAuth);
router.delete("/", CheckAuth);

export default router;
