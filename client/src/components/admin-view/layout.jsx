import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSideBar from "./sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
         {/* <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} /> */}
         <AdminSideBar/>
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        {/* <AdminHeader setOpen={setOpenSidebar} /> */}
        <AdminHeader/>
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
        </div>
  )
}
