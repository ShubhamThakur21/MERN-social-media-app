import express from "express";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  getAllPosts, // Added for fetching all posts
  getTimelinePosts, // Added for timeline posts
} from "../Controllers/PostController.js";

const router = express.Router();

// Create a new post
router.post("/", createPost);

// Get a single post by ID
router.get("/:id", getPost);

// Update a post by ID
router.put("/:id", updatePost);

// Delete a post by ID
router.delete("/:id", deletePost);

// Like/Unlike a post
router.put("/:id/like", likePost);

// Get all posts (newly added route)
router.get("/", getAllPosts);

// Get timeline posts (posts from the user and the users they follow)
router.get("/:id/timeline", getTimelinePosts);

export default router;
