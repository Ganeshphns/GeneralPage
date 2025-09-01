

import { Outlet } from "react-router-dom";
import { useState } from "react";


import UserSideBar from "./sidebar";
import UserHeader from "./header";




function UserLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <UserSideBar open={openSidebar} setOpen={setOpenSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <UserHeader setOpen={setOpenSidebar} />

        {/* Page Content */}
        <main className="flex-1 flex-col flex p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default UserLayout;
