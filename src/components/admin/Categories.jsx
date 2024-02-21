import React from "react";
import { SortableTable } from "./TableViewer";

const Categories = () => {
  const TABLE_ROWS = [
    {
      name: "Electronics",
      slug: "electronics",
      visibility: false,
      date: "08/02/2024",
      description: "Description for Electronics",
    },
    {
      name: "Clothing",
      slug: "clothing",
      visibility: true,
      date: "27/02/2024",
      description: "Description for Clothing",
    },
    {
      name: "Home & Garden",
      slug: "home-garden",
      visibility: true,
      date: "10/02/2024",
      description: "Description for Home & Garden",
    },
    {
      name: "Beauty & Personal Care",
      slug: "beauty-personal-care",
      visibility: true,
      date: "05/02/2024",
      description: "Description for Beauty & Personal Care",
    },
    {
      name: "Toys & Games",
      slug: "toys-games",
      visibility: true,
      date: "20/02/2024",
      description: "Description for Toys & Games",
    },
    // Add more objects with descriptions here
  ];

  // Add more rows as needed

  const TABLE_HEAD = [
    "Name",
    "Slug",
    "Visibility",
    "Last Update",
    "edit",
    "delete",
  ];

  return (
    <section>
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
              Categories
            </a>
          </li>
        </ol>
      </nav>
      <SortableTable
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={TABLE_ROWS}
        elem={"Category"}
      />
    </section>
  );
};

export default Categories;
