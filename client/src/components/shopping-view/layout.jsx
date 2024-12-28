import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
export default function ShoppingLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {" "}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}
