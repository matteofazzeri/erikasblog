import React from "react";
import { SortableTable } from "./TableViewer";

const Posts = () => {
  const TABLE_ROWS = [
    {
      img: "path/to/image1.jpg",
      author: "John Doe",
      status: "published",
      date: "21/01/2023",
      title: "The Adventure Begins",
      slug: "the-adventure-begins", // Adding slug property
    },
    {
      img: "path/to/image2.jpg",
      author: "Jane Smith",
      status: "pending",
      date: "15/03/2023",
      title: "The Secret Garden",
      slug: "the-secret-garden", // Adding slug property
    },
    {
      img: "path/to/image3.jpg",
      author: "Michael Johnson",
      status: "published",
      date: "05/06/2023",
      title: "Programming 101",
      slug: "programming-101", // Adding slug property
    },
    {
      img: "path/to/image4.jpg",
      author: "Emily White",
      status: "draft",
      date: "12/07/2023",
      title: "Cooking with Passion",
      slug: "cooking-with-passion", // Adding slug property
    },
    {
      img: "path/to/image5.jpg",
      author: "Alex Brown",
      status: "published",
      date: "28/09/2023",
      title: "Art of Photography",
      slug: "art-of-photography", // Adding slug property
    },
    {
      img: "path/to/image6.jpg",
      author: "Sophia Wilson",
      status: "published",
      date: "03/11/2023",
      title: "Fitness Journey",
      slug: "fitness-journey", // Adding slug property
    },
    {
      img: "path/to/image7.jpg",
      author: "David Lee",
      status: "draft",
      date: "20/12/2023",
      title: "Investing for Beginners",
      slug: "investing-for-beginners", // Adding slug property
    },
    {
      img: "path/to/image8.jpg",
      author: "Emma Taylor",
      status: "published",
      date: "14/02/2024",
      title: "Travel Diaries",
      slug: "travel-diaries", // Adding slug property
    },
    {
      img: "path/to/image9.jpg",
      author: "Daniel Martinez",
      status: "pending",
      date: "09/04/2024",
      title: "The Science of Climate Change",
      slug: "the-science-of-climate-change", // Adding slug property
    },
    {
      img: "path/to/image10.jpg",
      author: "Olivia Clark",
      status: "published",
      date: "25/06/2024",
      title: "Gardening Tips",
      slug: "gardening-tips", // Adding slug property
    },
  ];

  const TABLE_HEAD = [
    "Title",
    "Author",
    "Status",
    "Pusblished Date",
    "edit",
    "delete",
  ];

  return (
    <>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full px-4 py-0 rounded-md bg-inherit bg-opacity-60">
          <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
            <a href="/admin" className="opacity-60 no-underline">
              Dashboard
            </a>
            <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
              /
            </span>
          </li>
          <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
            <a href="" className="no-underline">
              Posts
            </a>
          </li>
        </ol>
      </nav>
      <SortableTable
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={TABLE_ROWS}
        elem={"Post"}
      />
    </>
  );
};

export default Posts;
