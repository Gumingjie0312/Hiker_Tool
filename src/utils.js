const axios = require("axios");

const err = require("./error");
const getUri = require("./uri");


const getRules = function () {
  const uri = getUri.getUri("/getAllRuleTitles");
  axios.defaults.timeout = 10000;
  axios
    .get(uri)
    .then((res) => {
      var data = res.data;
      return data;
    })
    .catch((e) => {
      console.log(e);
      err.netError("连失败");
    });
  console.log("b");
  return "a";
};

module.exports = { getRules };
