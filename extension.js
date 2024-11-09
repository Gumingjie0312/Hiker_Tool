// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const connect = require("./src/connect");
const MyTreeDataProvider = require("./src/tree");
//const a = require("./test/extension.test")
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "hikertool.connectPhone",
    function () {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user

      const rules = connect.tryConnect();
      const treeDataProvider = new MyTreeDataProvider();
      vscode.window.createTreeView("rules", { treeDataProvider });
      //connect.getColTypes();
    }
  );

  /*   context.subscriptions.push(
    vscode.commands.registerCommand("myExtension.addItem", async () => {
      const label = await vscode.window.showInputBox({
        prompt: "Enter item label",
      });
      if (label) {
        treeDataProvider.addItem(label);
      }
    })
  ); */

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
