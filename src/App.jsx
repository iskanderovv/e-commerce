import { Route, Routes } from "react-router-dom"
import Languages from "./components/languages/Languages"
import Navbar from "./components/navbar/Navbar"
import Home from "./routes/home/Home"
import Auth from "./routes/auth/Auth"
import Login from "./routes/auth/login/Login"
import Register from "./routes/auth/register/Register"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/Footer"
import Cart from "./routes/cart/Cart"
import SingleProduct from "./routes/single-product/SingleProduct"
import ScrollTop from "./components/scroll-top/ScrollTop"


const App = () => {
  return (
    <>
      <ScrollTop />
      <ToastContainer />
      <Languages />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
