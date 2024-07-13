import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import Container from "../../components/container/Container";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const [state, dispatch] = useContext(AppContext);
  const {t} = useTranslation();

  const handleRemoveItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  const handleIncreaseQuantity = (index) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: index });
  };

  const handleDecreaseQuantity = (index) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: index });
  };

  return (
    <Container>
      {state.cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-poppins text-3xl font-bold mb-5">{t("cartEmpty")}</h1>
          <Link to="/" className="bg-[#33A0FF] text-white px-5 rounded-md py-2">{t("backToHome")} </Link>
        </div>
      ) : (
        <div>
          <div className="container mx-auto p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b-2">
                  <th className="py-5 ps-12 text-darkblack text-left uppercase">{t("cartProduct")}</th>
                  <th className="py-5 text-darkblack text-center uppercase">{t("cartPrice")}</th>
                  <th className="py-5 text-darkblack uppercase">{t("cartQuantity")}</th>
                  <th className="py-5 text-darkblack text-center uppercase">{t("cartUintPrice")}</th>
                </tr>
              </thead>
              <tbody>
                {state.cart.map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="flex items-center py-2">
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="w-[23px] h-[23px] bg-red-200 rounded-full flex items-center justify-center text-red-500"
                      >
                        <CgClose />
                      </button>
                      <img className="w-[137px] h-[84px] object-contain mx-2" src={product.image} alt={product.title} />
                      <span className="font-poppins text-[18px] text-darkblack">{product.name}</span>
                    </td>
                    <td className="text-center">${product.price}</td>
                    <td className="py-2 flex justify-center">
                      <div className='bg-[#F6F7F8] max-w-[144px] justify-center flex items-center rounded-md'>
                        <button
                          onClick={() => handleDecreaseQuantity(index)}
                          className="text-[#33A0FF] font-bold text-xl px-5 py-2 rounded"
                        >
                          -
                        </button>
                        <span className='text-darkblack px-4 py-2'>{product.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(index)}
                          className="text-[#33A0FF] text-xl px-5 font-bold py-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 text-center">${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-[90px] mb-[156px]">
              <div className="mt-4 max-w-[490px] w-full">
                <div className="flex justify-between items-center text-darkblack">
                  <span>{t("cartSubtotal")}</span>
                  <span>${state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{t("cartShippingFee")}</span>
                  <span>$20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{t("cartCoupon")}</span>
                  <span>{t("hasCoupon")}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl mt-2">
                  <span>{t("cartTotal")}</span>
                  <span>${(state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0) + 20).toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded mt-4"> {t("cartCheckOut")} </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
