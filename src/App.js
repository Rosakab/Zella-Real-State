
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 
import ForgotPassword from "./Pages/ForgotPassword"; 
import Offers from "./Pages/Offers"; 
import Profile from "./Pages/Profile"; 
import SignIn from "./Pages/SignIn"; 
import SignUp from "./Pages/SignUp"; 
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
   <div>
<BrowserRouter>
<Header/>
<Routes>
  <Route  path="/"  element={<Home/>} />
  <Route  path="/Profile"  element={<Profile/>} />
  <Route  path="/Sign-in"  element={<SignIn/>} />
  <Route  path="/Sign-up"  element={<SignUp/>} />
  <Route  path="/Offers"  element={<Offers/>} />
  <Route  path="/Forgot-password"  element={<ForgotPassword/>} />
</Routes>
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
