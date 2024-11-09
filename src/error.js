const vscode = require("vscode");

const netError = function (err) {
  vscode.window.showErrorMessage(err);
};

module.exports = { netError };
