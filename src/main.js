"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainWindow = nw.window;
var MainWindow = (function () {
    function MainWindow() {
        this.createMenu = function () {
            // Create an empty menu
            var menu = nw.gui.Menu({ type: "menubar" });
            menu.createWindowBuitin && menu.createWindowBuitin(mainWindow.document.title);
            mainWindow.get().menu = menu;
        };
        this.createMenu();
        nw.window.open("www.google.com");
    }
    return MainWindow;
}());
exports.MainWindow = MainWindow;
//# sourceMappingURL=main.js.map