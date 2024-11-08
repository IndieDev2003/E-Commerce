import { Route, Routes } from "react-router-dom";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] duration-700 transition-all ">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
