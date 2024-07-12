import { FiShoppingCart } from "react-icons/fi"; 
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import Container from "../container/Container";


const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between py-7">
        <Link to='/auth' className="flex items-center gap-1 font-proxima text-darkblack text-xl">
          <AiOutlineUser className="text-xl" />
          My profile
        </Link>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <Link to='/cart' className="flex items-center gap-1 relative">
          <span className="absolute -right-2 -top-0 size-5 bg-[#FB7181] border-white border-2 rounded-full flex items-center justify-center text-[10px] text-white font-bold font-poppins ">2</span>
          <FiShoppingCart className="text-2xl" />
        </Link>
      </nav>
    </Container>
  )
}

export default Navbar
