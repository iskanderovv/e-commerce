// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(state.cart));
//   }, [state.cart]);

//   return (
//     <AppContext.Provider value={[state, dispatch]}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export { AppContext, AppProvider };