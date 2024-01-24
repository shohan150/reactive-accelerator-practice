const initialState = {
  cartData: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart":
      return {
        cartData: [...state.cartData, action.payload],
      };
      break;
    case "remove-from-cart":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      break;
    default:
      return state;
  }
};

export { cartReducer, initialState };
