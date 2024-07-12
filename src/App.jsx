import { Route, Routes } from "react-router-dom"
import Languages from "./components/languages/Languages"
import Navbar from "./components/navbar/Navbar"
import Home from "./routes/home/Home"
import Auth from "./routes/auth/Auth"
import Login from "./routes/auth/login/Login"
import Register from "./routes/auth/register/Register"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <ToastContainer />
      <Languages />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
