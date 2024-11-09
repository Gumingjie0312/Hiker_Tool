const vscode = require("vscode");
const utils = require("./utils");

class MyTreeDataProvider {
  constructor() {
    this._onDidChangeTreeData = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;

    // 维护树形数据
    this.items = [
      new MyTreeItem("Item 1", vscode.TreeItemCollapsibleState.Collapsed),
      new MyTreeItem("Item 2", vscode.TreeItemCollapsibleState.None),
    ];
    const rules = []
    //var a = utils.getRules()
    //console.log(a)
    //console.log(rules);
  }

  getTreeItem(element) {
    return element;
  }

  getChildren(element) {
    if (element) {
      return Promise.resolve(element.children);
    } else {
      return Promise.resolve(this.items);
    }
  }

  // 添加新项
  addItem(label) {
    const newItem = new MyTreeItem(label, vscode.TreeItemCollapsibleState.None);
    this.items.push(newItem);
    this.refresh();
  }

  // 删除项
  removeItem(label) {
    this.items = this.items.filter((item) => item.label !== label);
    this.refresh();
  }

  refresh() {
    this._onDidChangeTreeData.fire();
  }
}

class MyTreeItem extends vscode.TreeItem {
  constructor(label, collapsibleState) {
    super(label, collapsibleState);
    this.children = []; // 可以在这里定义子节点
  }
}

module.exports = MyTreeDataProvider;
