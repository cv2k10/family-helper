const initialState = {
  showDropdownMenu: false,
  fbRedirectPath: "/",
};

const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN_MENU":
      if (action.payload == null) {
        return { ...state, showDropdownMenu: !state.showDropdownMenu };
      } else {
        return { ...state, showDropdownMenu: action.payload };
      }
    case "SET_FB_REDIRECT_PATH":
      return { ...state, fbRedirectPath: action.payload };
    default:
      return state;
  }
};

export default controlReducer;
