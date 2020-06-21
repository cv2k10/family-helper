const initialState = {
  title: "Family Helper",
  bgColorCss: "bg-blue-500",
  taxRate: 0.06,
  deliveryFee: 15,
  freeDeliveryIfAbove: 200,
  orderStartingNumber: 1000,
  // showDropdownMenu: false

  store: {
    email: 'lfei2k@gmail.com',
  }
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETTING_TITLE":
      return { ...state, title: action.payload };
    case "SETTING_BGCOLOR":
      return { ...state, bgColorCss: action.payload };
    // case 'TOGGLE_DROPDOWN_MENU':
    //   if(action.payload == null) {
    //     return { ...state, showDropdownMenu: !state.showDropdownMenu }
    //   } else {
    //     return { ...state, showDropdownMenu: action.payload }
    //   }
    default:
      return state;
  }
};

export default settingReducer;
