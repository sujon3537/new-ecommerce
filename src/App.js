import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import SingleProduct from "./components/SingleProduct";
import ProductCategory from "./components/ProductCategory";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Downloads from "./components/Downloads";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/single" element={<SingleProduct />}></Route>
      <Route path="/product-category" element={<ProductCategory />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="downloads" element={<Downloads />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
