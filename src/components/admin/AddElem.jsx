import RichTextEditor from "./RichTextEditor/RichTextEditor";
import {
  Button,
  Input,
  Switch,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import DragDropFile from "../DragDropFile";
import { WhenToPublicPicker } from "../WhenToPublicPicker";
import { format } from "date-fns";

export function AddCategory({ elem, rows }) {
  const [catName, setCatName] = useState("");
  const [slug, setSlug] = useState();
  const [description, setDescription] = useState();
  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    setSlug(catName.toLowerCase().replace(/\s+/g, "-"));
  }, [catName]);

  const handleCreate = () => {
    const newObj = {
      name: catName,
      slug: slug,
      description: description,
      visibility: visibility,
      date: new Date(),
    };

    rows.push(newObj);

    console.log(newObj);
    // Clear input values after creating category
    setCatName("");
    setSlug("");
    setDescription("");

    // Close the dialog
    setOpen(false);
  };

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>New {elem}</Button>
      <Dialog size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <Typography variant="h5"> Create category</Typography>
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
        <DialogBody className="overflow-auto max-h-[80vh]">
          <form>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <Input
                variant="outlined"
                label="Name"
                placeholder="Name"
                value={catName}
                onChange={(e) => {
                  setCatName(e.target.value);
                  setSlug(catName.toLowerCase().replace(/\s+/g, "-"));
                }}
              />
              <Input
                label="Slug"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
                }}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-black text-lg mb-1">Description</h5>
              <RichTextEditor setDescription={setDescription} />
            </div>
            {elem.toLowerCase() === "category" && (
              <div className="m-4">
                <Switch
                  defaultChecked
                  label="Visible to Readers"
                  onChange={() => setVisibility(!visibility)}
                />
              </div>
            )}
            {elem.toLowerCase() === "post" && (
              <div>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Input
                    variant="outlined"
                    label="Author"
                    placeholder="Author"
                    value={catName}
                    onChange={(e) => {
                      setCatName(e.target.value);
                      setSlug(catName.toLowerCase().replace(/\s+/g, "-"));
                    }}
                  />
                  <Input
                    variant="outlined"
                    label="Category"
                    placeholder="Category"
                    value={catName}
                    onChange={(e) => {
                      setCatName(e.target.value);
                      setSlug(catName.toLowerCase().replace(/\s+/g, "-"));
                    }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 my-6">
                  <WhenToPublicPicker
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                  <Input
                    variant="outlined"
                    label="Tags"
                    placeholder="Tags"
                    value={catName}
                    onChange={(e) => {
                      setCatName(e.target.value);
                      setSlug(catName.toLowerCase().replace(/\s+/g, "-"));
                    }}
                  />
                </div>
                <DragDropFile />
              </div>
            )}

            <div className="flex flex-wrap">
              <Button
                variant="filled"
                className="normal-case text-md py-2 px-3"
                onClick={handleCreate}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                className="normal-case text-md py-2 px-3"
              >
                Create & create another
              </Button>
              <Button
                variant="outlined"
                className="normal-case text-md py-2 px-3"
                onClick={handleOpen}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
