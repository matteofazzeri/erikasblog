import React, { useEffect, useState } from "react";
import {
  SidebarWithBurgerMenu,
  SidebarWithContentSeparator,
} from "../components/admin/sidebar";
import { NavbarWithSearch } from "../components/admin/navbar";
import Categories from "../components/admin/Categories";
import Posts from "../components/admin/Posts";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

//import { StickyNavbar } from "../components/admin/navbar";

const AdminPanel = () => {
  return (
    <section className="w-screen max-h-screen flex justify-between relative">
      <div className="max-w-fit h-screen absolute lg:static top-0 left-0 z-50">
        <SidebarWithContentSeparator />
        <SidebarWithBurgerMenu />
      </div>
      <div className="w-screen xl:w-[calc(100vw-20rem)] mx-auto z-0 relative">
        <header className="w-auto">
          <NavbarWithSearch />
        </header>
        <div className="mt-2">
          {console.log(location.pathname)}
          {location.pathname === "/erikasblog/admin/posts" && <Posts />}
          {location.pathname === "/erikasblog/admin/categories" && <Categories />}
          {location.pathname === "/erikasblog/admin/login" && <Login />}
          {location.pathname === "/erikasblog/admin/*" && <NotFound />}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
