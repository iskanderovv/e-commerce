import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import Container from "../../components/container/Container";
import { AppContext } from "../../context/AppContext";

const Cart = () => {
  const [state, dispatch] = useContext(AppContext);

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
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b-2">
              <th className="py-5 ps-12 text-darkblack text-left uppercase">Product</th>
              <th className="py-5 text-darkblack text-center uppercase">Price</th>
              <th className="py-5 text-darkblack uppercase">Qty</th>
              <th className="py-5 text-darkblack text-center uppercase">Unit Price</th>
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
              <span>Subtotal</span>
              <span>${state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping fee</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Coupon</span>
              <span>No</span>
            </div>
            <div className="flex justify-between items-center font-bold text-xl mt-2">
              <span>Total</span>
              <span>${(state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0) + 20).toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded mt-4">Check out</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
