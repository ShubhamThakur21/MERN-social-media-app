import express from "express";
import { addComment, deleteComment } from "../Controllers/CommentController.js";

const router = express.Router();

router.post("/", addComment);
router.delete("/:id", deleteComment);

export default router;
