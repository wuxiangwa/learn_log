const SALT = 'XIJKIEJDJ9J098#$JH3H0001//22P';
const sort = (a, b) => { if (a > b) { return 1 } else if (a < b) { return -1 } else { return 0 } };
// import md5 from './md5';
var md5 = require('./md5');
const params = {"avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/iaRHxxxicibDZB5nU4klqu7FPiazjl2zFqggib2UBzbx6FqTsriaJxNVrfMLDhD1M5ychlVa2Dlo9RlCUPBL7ibIZJGsw/0",
  "city":"Hangzhou",
  "company_name":"腾讯公司",
  "country":"China",
  "email":"null",
  "gender":"1",
  "language":"zh_CN",
  "mobile":"13967174790",
  "name":"Jocan蒋小隐",
  "nickName":"Jocan蒋小隐",
  "photo_url":"https://wx.qlogo.cn/mmopen/vi_32/iaRHxxxicibDZB5nU4klqu7FPiazjl2zFqggib2UBzbx6FqTsriaJxNVrfMLDhD1M5ychlVa2Dlo9RlCUPBL7ibIZJGsw/0",
  "position":"互联网 浙江负责人",
  "province":"Zhejiang",
  "sms_code":"8396"
};

const auth = {
  "session_token":"aedb620d1b32c6ed5deb5a995da91377",
  "access_token":"f9d0d7dc0e09b6500bac89aedfd69af2"
}

const data = {};

const getApiSign = (params = {}, auth = {}) => {
  params = Object.assign({}, params, auth);
  const queryString = Object.keys(params).sort(sort).map(i => `${i}=${params[i]}`).join('&');
  console.log('queryString:', queryString);
  const signStr = `${SALT}${queryString}${SALT}`;
  return md5(signStr);
};

console.log(getApiSign(params, auth));
