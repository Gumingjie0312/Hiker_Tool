const vscode = require("vscode");

const host = vscode.workspace.getConfiguration().get("hikertool.phoneHost");
const port = vscode.workspace.getConfiguration().get("hikertool.phonePort");

const getUri = function (root) {
  const uri = "http://" + host + ":" + port + root;
  return uri;
};

module.exports = {
  getUri,
};
