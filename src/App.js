import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "../src/routes/home/Home";
import Authentication from "./routes/auth/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<p>shop world</p>} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
