export const setAuthFb = fbData => {
  return {
    type: "AUTH_FB_SET",
    payload: fbData,
  };
};

export const setFbRedirectPath = (path) => {
  return {
    type: "SET_FB_REDIRECT_PATH",
    payload: path,
  };
};