import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const AppLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default AppLayout;
