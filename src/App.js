import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import ShoppingCart from "./Pages/ShoppingCart";
import CartProvider  from "./context/CartContext";

// putting some path to privateRoute as we don't want to have access to that page
//without authorization and access to this pages need to be signed in first.

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />

        <CartProvider>

          <Routes>
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Forgot-password" element={<ForgotPassword />} />


          </Routes>
        </CartProvider>
        
        <Footer />
      </BrowserRouter>

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
        theme="dark"
      />
    </div>
  );
};

export default App;
