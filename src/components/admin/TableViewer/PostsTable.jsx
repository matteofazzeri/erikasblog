import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import DeletePopup from "../DeletePopup";

export const PostsTable = ({ rows, handleDelete }) => {
  return (
    <>
      {rows.map(({ img, author, status, date, title, slug }, index) => {
        const isLast = index === rows.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={slug}>
            <td className={classes}>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <Avatar src={img} alt={title} size="sm" variant="rounded" />
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {title}
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
                  {author}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <div className="w-max">
                <Chip
                  size="sm"
                  variant="ghost"
                  value={status}
                  color={
                    status === "published"
                      ? "green"
                      : status === "pending"
                      ? "amber"
                      : "red"
                  }
                />
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
              <div className="w-fit h-fit">
                <DeletePopup deleteElem={handleDelete} elem={rows[index]} />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};
