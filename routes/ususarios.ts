import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from "../controllers/ususarios";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", postUsuario);
router.put("/", putUsuario);
router.delete("/", deleteUsuario);

export default router;
