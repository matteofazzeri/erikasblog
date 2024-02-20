import React from "react";
import { IconButton, Drawer, Card } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="block xl:hidden max-h-[100vh] z-50">
      <IconButton variant="text" size="lg" onClick={openDrawer} className="md:mt-4">
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          ciao
          {/* <Sidebar open={open} handleOpen={handleOpen} /> */}
        </Card>
      </Drawer>
    </div>
  );
}
