const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      
    case "DELITEM":
      const exists = state.find((x) => x.id === product.id);
      if (exists.qty === 1) {
        return state.filter((x) => x.id !== exists.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      

    default:
      return state;
      
  }
};

export default handleCart;
