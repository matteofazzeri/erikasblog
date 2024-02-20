import { AddCategory } from "./AddElem";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { orderByProperty } from "../../config/config";
import { CategoryTable } from "./TableViewer/CategoryTable";
import { PostsTable } from "./TableViewer/PostsTable";

export function SortableTable({ TABLE_HEAD, TABLE_ROWS, elem }) {
  const [searchCat, setSearchCat] = useState("");
  const [rows, setRows] = useState(TABLE_ROWS);
  const [itemsPerPage, setItemsPerPage] = useState("5");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRows = rows.filter((row) => {
    return row.slug.toLowerCase().startsWith(searchCat.toLowerCase());
  });

  const totalElement = rows.length;

  function deleteElement() {}

  const handleDelete = (slug) => {
    setRows(rows.filter((row) => row.slug !== slug));
  };

  // Convert itemsPerPage to number
  const perPage = parseInt(itemsPerPage);

  // Calculate total pages based on current rows after pagination
  const totalPages = Math.ceil(filteredRows.length / perPage);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, filteredRows.length);

  // Slice current rows based on pagination
  const currentRows = filteredRows.slice(startIndex, endIndex);

  return (
    <Card className="w-full max-h-[90vh]">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none min-h-11"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="hidden md:block"
            >
              {elem.toLowerCase() === "posts" ? "Posts" : "Categories"}
            </Typography>
          </div>
          <div className="w-full h-fit md:w-fit pt-[2px] flex justify-between sm:justify-around md:justify-normal items-center shrink-0 flex-row sm:gap-2">
            <div className="w-12 md:w-72">
              <Input
                label="Search Categories"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSearchCat(e.target.value.toLowerCase());
                }}
              />
            </div>
            <AddCategory elem={elem} rows={rows} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0 min-h-[50vh] max-h-[70vh] mt-4">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="relative flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head !== "edit" && head !== "delete" && head}
                    {index !== TABLE_HEAD.length - 1 &&
                      head !== "Visibility" &&
                      head !== "Status" &&
                      head !== "edit" &&
                      head !== "delete" && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4 lg:absolute right-0"
                          onClick={() =>
                            setRows(
                              head.toLowerCase() === "last update" ||
                                head.toLowerCase() === "pusblished date"
                                ? orderByProperty(filteredRows, "date")
                                : orderByProperty(
                                    filteredRows,
                                    head.toLowerCase()
                                  )
                            )
                          }
                        />
                      )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {elem.toLowerCase() === "post" ? (
              <PostsTable rows={currentRows} handleDelete={handleDelete} />
            ) : (
              <CategoryTable rows={currentRows} handleDelete={handleDelete} />
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex flex-col lg:flex-row gap-y-2 items-center justify-between border-t border-blue-gray-50 ">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages} of {totalElement} results
        </Typography>
        <div className="w-72">
          <Select
            label="Per Page"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            onChange={(value) => {
              setItemsPerPage(value);
            }}
          >
            <Option value={"5"}>5</Option>
            <Option value={"10"}>10</Option>
            <Option value={"15"}>15</Option>
            <Option value={"25"}>25</Option>
            <Option value={"50"}>50</Option>
            <Option value={"100"}>100</Option>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() =>
              setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
