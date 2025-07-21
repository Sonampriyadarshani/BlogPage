import React from "react";
import BlogEditor from "../components/BlogEditor";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <BlogEditor />
      <div className="mt-10">
        <BlogList />
      </div>
    </div>
  );
};

export default Home;
