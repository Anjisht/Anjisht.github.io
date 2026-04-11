import express from "express";
import { submitContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", getContacts); // protect this in production

export default router;
