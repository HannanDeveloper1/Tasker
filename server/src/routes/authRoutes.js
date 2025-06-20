import { Router } from "express";

import { registerUser } from "../controllers/authController.js";
import { validateBody } from "../middlewares/validatorMiddleware.js";
import { registerSchema } from "../schemas/authSchemas.js";

const router = Router();

router.get("/register", validateBody(registerSchema), registerUser);

export default router;
