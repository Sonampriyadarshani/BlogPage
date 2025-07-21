import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">📝 Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded shadow p-4 mb-4 relative"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <div
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
            <button
              onClick={() => handleDelete(blog._id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
              title="Delete Blog"
            >
              ❌
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
