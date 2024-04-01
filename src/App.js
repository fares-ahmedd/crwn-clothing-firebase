import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "../src/routes/home/Home";
import Authentication from "./routes/auth/Authentication";
import UserProvider from "./context/UserContext";
import Shop from "./routes/shop/Shop";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Navigate replace to={"/home"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/auth" element={<Authentication />} />
              </Route>
              <Route path="*" element={<p>not found</p>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
