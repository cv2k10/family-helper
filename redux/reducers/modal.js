const initialState = {
  // popup: false,
  // checkout: false,
  // register: false,
  // orderCompleted: "",
  fbSignin: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "MODAL_SET_POPUP":
    //   return { ...state, popup: action.payload };
    // case "MODAL_SET_CHECKOUT":
    //   return { ...state, checkout: action.payload };
    // case "MODAL_SET_REGISTER":
    //   return { ...state, register: action.payload };
    // case "MODAL_SET_ORDER_COMPLETED":
    //   return { ...state, orderCompleted: action.payload };
    case "MODAL_SET_FB_SIGNIN":
      return { ...state, fbSignin: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
