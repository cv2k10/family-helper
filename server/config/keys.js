const keysProduction = {
  facebook: {
    appID: "258569651891377",
    appSecret: "bf3f3d73b819deb076c8c1b2dc17816e",
  },
  mongodb: {
    dbURI: "mongodb://cv2k10:btrsc1@ds115340.mlab.com:15340/family-helper1",
  },
  session: {
    cookieKey: "everybodylivesinawonderfulworld",
  },
};

const keysDevelopment = {
  facebook: {
    appID: "675388803304459",
    appSecret: "8fa2869b8793ff4b4ab031552a5eb7a7",
  },
  mongodb: {
    dbURI: "mongodb://cv2k10:btrsc1@ds029486.mlab.com:29486/family-helper1-dev",
  },
  session: {
    cookieKey: "everybodylivesinawonderfulworld",
  },
};

const dev = process.env.NODE_ENV !== "production";

module.exports = dev? keysDevelopment: keysProduction;