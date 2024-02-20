import React from "react";
import { SortableTable } from "./TableViewer";

const Categories = () => {
  const TABLE_ROWS = [
    {
      name: "Electronics",
      slug: "electronics",
      visibility: false,
      date: "08/02/2024",
    },
    {
      name: "Clothing",
      slug: "clothing",
      visibility: true,
      date: "27/02/2024",
    },
    {
      name: "Home & Garden",
      slug: "home-garden",
      visibility: true,
      date: "10/02/2024",
    },
    {
      name: "Beauty & Personal Care",
      slug: "beauty-personal-care",
      visibility: true,
      date: "05/02/2024",
    },
    {
      name: "Toys & Games",
      slug: "toys-games",
      visibility: true,
      date: "20/02/2024",
    },
    {
      name: "Sports & Outdoors",
      slug: "sports-outdoors",
      visibility: true,
      date: "15/02/2024",
    },
    {
      name: "Books",
      slug: "books",
      visibility: true,
      date: "23/01/2024",
    },
    {
      name: "Health & Wellness",
      slug: "health-wellness",
      visibility: true,
      date: "30/01/2024",
    },
    {
      name: "Automotive",
      slug: "automotive",
      visibility: true,
      date: "22/02/2024",
    },
    {
      name: "Food & Beverage",
      slug: "food-beverage",
      visibility: true,
      date: "24/02/2024",
    },
    {
      name: "Furniture",
      slug: "furniture",
      visibility: false,
      date: "18/02/2024",
    },
    {
      name: "Jewelry",
      slug: "jewelry",
      visibility: true,
      date: "25/01/2024",
    },
    {
      name: "Pet Supplies",
      slug: "pet-supplies",
      visibility: false,
      date: "02/02/2024",
    },
    {
      name: "Art & Crafts",
      slug: "art-crafts",
      visibility: false,
      date: "12/02/2024",
    },
    {
      name: "Electrical Appliances",
      slug: "electrical-appliances",
      visibility: false,
      date: "28/01/2024",
    },
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
