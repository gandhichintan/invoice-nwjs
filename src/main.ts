declare var nw: any;


let mainWindow = nw.window;

export class MainWindow {

    constructor() {
        this.createMenu();
        nw.window.open("www.google.com");
    }

    createMenu = () => {
        // Create an empty menu
        var menu = nw.gui.Menu({ type: "menubar" });
        menu.createWindowBuitin && menu.createWindowBuitin(mainWindow.document.title);
        mainWindow.get().menu = menu;
    }
}





