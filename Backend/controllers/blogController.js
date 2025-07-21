const Blog = require('../models/Blog');

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const { title, author, content, imageUrls } = req.body;
  try {
    const newBlog = new Blog({ title, author, content, imageUrls });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { title, author, content, imageUrls } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, author, content, imageUrls, updatedAt: new Date() },
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

