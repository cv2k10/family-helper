const initialState = {
  isAuth: false,
  ["_id"]: null,
  facebookId: null,  
  name: "",
  familyName: null,
  givenName: null,
  email: null,
  pictureUrl: null
};

const authFbReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_FB_SET":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authFbReducer;