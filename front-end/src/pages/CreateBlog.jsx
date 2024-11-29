import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill CSS


 import Header from "../components/Header";
import Footer from "../components/Footer";
 import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles


const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "", // content will store HTML from the rich text editor
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value, // Save HTML content from Quill editor
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content); // Send HTML content
    data.append("category", formData.category);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/posts`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Blog post published successfully!");
    } catch (error) {
      toast.error("Error publishing blog post! Please try again.");
    }
  };

  return (
    <div className="w-[100vw] min-h-screen bg-[#ffffff] flex items-center justify-center">
      <div className="w-[75vw] bg-[#ffffff] rounded-lg flex flex-col items-center justify-center">
        <Header />
        <div className="w-[65vw]">
          <form className="space-y-6 mt-2" onSubmit={handleSubmit}>
            {/* Blog Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter the blog title"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 bg-white"
                onChange={handleChange}
                value={formData.title}
              />
            </div>

            {/* Blog Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                onChange={handleChange}
                value={formData.category}
              >
                <option value="" disabled>Select a category</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
                <option value="business">Business</option>
              </select>
            </div>

            {/* Blog Content - Quill Editor */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Blog Content
              </label>
              <ReactQuill
                id="content"
                value={formData.content}
                onChange={handleContentChange}
                placeholder="Write your blog content here..."
                className="text-black"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Cover Image
              </label>
              <input
                type="file"
                id="image"
                className="w-full mt-2 px-4 py-2 border border-gray-300 text-black rounded-lg bg-white"
                onChange={handleFileChange}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateBlog;
