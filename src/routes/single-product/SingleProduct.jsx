import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/usePostFetch';
import { ImStarFull, ImStarHalf } from 'react-icons/im';
import Container from '../../components/container/Container';
import { AppContext } from "../../context/AppContext";
import SingleTopRated from "../../components/single-top-rated/SingleTopRated";
import { useTranslation } from "react-i18next";

const SingleProduct = () => {
  const [state, dispatch] = useContext(AppContext);
  const { id } = useParams();
  const [url, setUrl] = useState(`products/${id}`);
  const { data: product } = useFetch(url);
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    if (product) {
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

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

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-20">
        <div className='max-w-[526px] h-[549px] object-contain'>
          <img src={product.image} alt={product.name} className="object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
          <div className="flex items-center mb-4 border-b-2 pb-4 border-[#F6F7F8] ">
            <div className="flex">{renderStars(product.rating)}</div>
            <p className="ml-2">{product.numReviews} reviews</p>
            <a href="#submit-review" className="ml-4 text-blue-600">Submit a review</a>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <p className="text-3xl font-bold text-[#40BFFF] ">${product.price}</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 line-through">${(product.price / 0.76).toFixed(2)}</p>
              <p className="text-red-500 font-bold">24% off</p>
            </div>
          </div>
          <div className="mb-[90px] grid grid-cols-2 max-w-[500px]">
            <p>{t("singleProductAvailability")}: </p>
            <p>{t("singleProductInStock")}: {product.countInStock}</p>
            <p>{t("singleProductCategory")}: {product.brand}</p>
            <p>{t("singleProductAccessories")}</p>
            <p>{t("singleProductFreeShipping")}</p>
          </div>
          <div className="flex items-center justify-between gap-4 mb-4 border-[#F6F7F8] py-5 border-y-2 ">
            <div className='bg-[#F6F7F8] flex items-center rounded-md'>
              <button className="text-[#33A0FF] font-bold text-xl px-5 py-2 rounded" onClick={handleDecreaseQuantity}>-</button>
              <span className='text-darkblack px-4 py-2'>{quantity}</span>
              <button className="text-[#33A0FF] text-xl px-5 font-bold py-2 rounded" onClick={handleIncreaseQuantity}>+</button>
            </div>
            <div className="flex gap-5">
              <button className="bg-[#ebf6ff] text-[#33A0FF] px-7 py-2 rounded flex gap-2 items-center" onClick={handleAddToCart}><AiOutlineShoppingCart /> {t("AddToCartBtn")} </button>
              <button className="bg-[#ebf6ff] text-[#33A0FF] px-4 py-2 rounded flex gap-2 items-center"><MdFavoriteBorder /></button>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#385C8E] text-white w-full px-4 py-2 rounded"> {t("singleProductTwitter")} </button>
            <button className="bg-[#03A9F4] text-white w-full px-4 py-2 rounded"> {t("singleProductInformationTitle")} </button>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-20 py-9 px-10 rounded-lg bg-[#FAFAFB] ">
        <h4 className="text-[18px] mb-4 text-[#2E90E5] inline-block pb-5 border-b-4 border-[#2E90E5] "> {t("singleProductInformationTitle")} </h4>
        <p className="text-gray-700 mt-5">{product.description}</p>
      </div>
      <div>
        <SingleTopRated />
      </div>
    </Container>
  );
};

export default SingleProduct;
