// config used by dashboard client side only
// const serverPath = `45.58.52.177`;
const serverPath = `localhost`;
module.exports = {
  // dashboard UI language
  language: 'vi',
  apiBaseUrl: `http://${serverPath}:3001/api/v1`,
  apiWebSocketUrl: `ws://${serverPath}:3001`,
  developerMode: true,
};
