import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "../uploads");

// GET /api/cv/pdf  — download resume as PDF
router.get("/pdf", (req, res) => {
    const filePath = path.join(uploadsDir, "resume.pdf");
    res.download(filePath, "Anjisht_Resume.pdf", (err) => {
        if (err) {
            console.error("PDF download error:", err);
            res.status(404).json({ error: "PDF file not found on server." });
        }
    });
});

// GET /api/cv/docx  — download resume as Word document
router.get("/docx", (req, res) => {
    const filePath = path.join(uploadsDir, "resume.docx");
    res.download(filePath, "Anjisht_Resume.docx", (err) => {
        if (err) {
            console.error("DOCX download error:", err);
            res.status(404).json({ error: "DOCX file not found on server." });
        }
    });
});

export default router;
