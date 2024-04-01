import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function AppLayout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default AppLayout;
