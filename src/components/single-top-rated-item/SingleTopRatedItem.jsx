import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { ImStarHalf, ImStarFull } from "react-icons/im";
import './SingleTopRatedItem.scss';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const SingleTopRatedItem = ({ product }) => {
  const [state, dispatch] = useContext(AppContext);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<ImStarFull key={i} className="text-[#FFC600]" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<ImStarHalf key={i} className="text-[#FFC600]" />);
      } else {
        stars.push(<ImStarFull key={i} className="text-[#FFC600]" />);
      }
    }
    return stars;
  };

  const handleCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className='shadow-card-shadow rounded pb-4'>
      <div className='w-[300px] h-[272px] relative cart-hover '>
        <div className="cart-fav-cart">
          <MdFavorite className="h-[50px] hover:bg-[#33A0FF] hover:text-white transation w-[50px] py-3 rounded-full text-[#33A0FF] border-2 border-[#33A0FF] cursor-pointer px-3" />
          <HiOutlineShoppingCart onClick={() => handleCart(product)} className="h-[50px] hover:bg-[#33A0FF] hover:text-white transation w-[50px] py-3 rounded-full text-[#33A0FF] border-2 border-[#33A0FF] cursor-pointer px-3" />
        </div>
        <img className='w-[300px] h-[272px] object-contain' src={product.image} alt={product.title} />
      </div>
      <Link to={`/single-product/${product.id}`} className='flex flex-col items-center'>
        <h4 className='text-[#223263] font-poppins font-bold text-[18px] mt-3.5'>{product.name}</h4>
        <div className="flex gap-[13px] items-center py-1.5">
          {renderStars(product.rating)}
        </div>
        <div className="flex gap-[13px] items-center">
          <p className="text-[#40BFFF] font-poppins font-bold text-[18px] ">${product.price}</p>
          <div className="font-poppins text-[14px] flex gap-3">
            <p className="text-[#9098B1]  line-through ">${product.price - (product.price * 0.24)}</p>
            <p className="text-[#FB7181] font-bold ">24% off</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleTopRatedItem;
