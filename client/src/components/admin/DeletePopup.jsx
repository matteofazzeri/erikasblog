import React, { useState } from "react";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { TrashIcon as TrashIconOutline } from "@heroicons/react/24/outline";
import {
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const DeletePopup = ({ deleteElem, elem }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleDelete = () => deleteElem(elem.slug);

  return (
    <>
      <IconButton variant="text" onClick={handleOpen}>
        <TrashIcon color="red" className="h-4 w-4" />
      </IconButton>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-end">
          <div className="w-full absolute left-0 top-5 flex flex-col items-center">
            <IconButton
              variant="text"
              className="bg-red-200/30 rounded-full p-6"
            >
              <TrashIconOutline color="red" className="w-6 h-6" />
            </IconButton>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="flex items-center flex-col">
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="font-semibold opacity-70"
          >
            Delete {elem.name}
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="opacity-70"
          >
            Are you sure you would like to do this?
          </Typography>
        </DialogBody>
        <DialogFooter className="justify-evenly">
          <Button variant="outlined" onClick={handleOpen}>
            Cancel
          </Button>
          <Button color="red" onClick={handleDelete}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DeletePopup;
