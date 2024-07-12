// const initialState = {
//   cart: JSON.parse(localStorage.getItem("cart")) || [],
// };

// const reducer = (state, action) => {
//   let updatedCart;
//   switch (action.type) {
//     case "REMOVE_ITEM":
//       updatedCart = state.cart.filter(
//         (item, index) => index !== action.payload
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return { ...state, cart: updatedCart };
//     case "INCREASE_QUANTITY":
//       updatedCart = state.cart.map((item, index) =>
//         index === action.payload
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return { ...state, cart: updatedCart };
//     case "DECREASE_QUANTITY":
//       updatedCart = state.cart.map((item, index) =>
//         index === action.payload && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return { ...state, cart: updatedCart };
//     default:
//       return state;
//   }
// };


// export default reducer