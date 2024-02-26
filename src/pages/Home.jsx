import React from "react";
import { Link } from "react-router-dom";

const hardcodedPosts = [
  {
    id: 1,
    title: "First Blog Post",
    author: "John Doe",
    date: "February 15, 2024",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/300", // Example placeholder image URL
  },
  {
    id: 2,
    title: "Second Blog Post",
    author: "Jane Smith",
    date: "February 16, 2024",
    summary:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/300", // Example placeholder image URL
  },
  // Add more hardcoded posts as needed
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4"><a href="admin">Latest Blog Posts</a></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardcodedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Link to={`/post/${post.id}`}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link
                to={`/post/${post.id}`}
                className="block text-lg font-semibold mb-2 hover:text-blue-500"
              >
                {post.title}
              </Link>
              <p className="text-gray-600 text-sm mb-2">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-700">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
