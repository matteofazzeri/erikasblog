import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Typography, IconButton, Tooltip } from "@material-tailwind/react";
import DeletePopup from "../DeletePopup";

export const CategoryTable = ({ rows, handleDelete }) => {
  return (
    <>
      {rows.map(({ name, slug, visibility, date }, index) => {
        const isLast = index === rows.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={slug}>
            <td className={classes}>
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </div>
              </div>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {slug}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <div className="w-max">
                {visibility ? (
                  <svg
                    className="fi-ta-icon-item fi-ta-icon-item-size-lg h-6 w-6 fi-color-custom text-custom-500 dark:text-custom-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="green"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="fi-ta-icon-item fi-ta-icon-item-size-lg h-6 w-6 fi-color-custom text-custom-500 dark:text-custom-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="red"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    ></path>
                  </svg>
                )}
              </div>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {date}
              </Typography>
            </td>
            <td className={classes}>
              <Tooltip content="Edit Category">
                <IconButton variant="text">
                  <PencilIcon className="h-4 w-4" />
                </IconButton>
              </Tooltip>
            </td>
            <td className={classes}>
              <Tooltip content="Delete Category">
                <div className="w-fit h-fit">
                  <DeletePopup deleteElem={handleDelete} elem={rows[index]} />
                </div>
              </Tooltip>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CategoryTable;
