import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminHeader from "./header";
import AdminSideBar from "./sidebar";


function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <AdminHeader setOpen={setOpenSidebar} />

        {/* Page Content */}
        <main className="flex-1 flex-col flex p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
