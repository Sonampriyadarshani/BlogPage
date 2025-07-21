const express = require("express");
const router = express.Router();
const { generateBlog } = require("../controllers/geminiController");
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

router.post("/generate", generateBlog);
router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
