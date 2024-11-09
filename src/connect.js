const vscode = require("vscode");
const axios = require("axios");

const err = require("./error");
const getUri = require("./uri");

axios.defaults.timeout = 10000;
const tryConnect = function () {
  const uri = getUri.getUri("/getAllRuleTitles");
  vscode.window.showInformationMessage("尝试连接手机");
  axios
    .get(uri)
    .then((res) => {
      const data = res.data;
      vscode.window.showInformationMessage(
        "连接成功，共有" + data.length + "个规则"
      );
      const statusBar = vscode.window.createStatusBarItem(
        "hikertool.status",
        vscode.StatusBarAlignment.Left
      );
      statusBar.name = "海阔视界";
      statusBar.text = "已连接海阔视界";
      statusBar.show();
      return data;
    })
    .catch((e) => {
      console.log(e);
      err.netError("连接失败");
    });
};

const getColTypes = function () {
  const uri = getUri.getUri("/getColTypes");
  axios
    .get(uri)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((e) => {
      console.log(e);
      err.netError("网络错误");
    });
};

module.exports = { tryConnect, getColTypes };
