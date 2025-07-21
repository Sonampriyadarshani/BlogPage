import React, { useState } from "react";
import axios from "axios";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/blogs/generate", {
        topic,
      });
      setContent(res.data.content);
    } catch (err) {
      alert("Failed to generate content");
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/blogs", {
        title,
        author,
        content,
      });
      alert("Blog created!");
      setTitle("");
      setAuthor("");
      setTopic("");
      setContent("");
      window.location.reload(); // refresh to show blog
    } catch (err) {
      alert("Error submitting blog");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create Blog Post</h2>

      <input
        type="text"
        placeholder="Blog Title"
        className="border p-2 w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author Name"
        className="border p-2 w-full mb-3"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Enter Topic"
          className="border p-2 w-full"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Generate
        </button>
      </div>

      <textarea
        className="w-full h-60 border p-2 mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog here..."
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Submit Blog
      </button>
    </div>
  );
};

export default BlogEditor;
