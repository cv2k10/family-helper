export const setAuthFb = fbData => {
  return {
    type: "AUTH_FB_SET",
    payload: fbData,
  };
};