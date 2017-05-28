
class Application {
    
    byTag(name) {
        return document.getElementsByTagName(name)[0]; 
    }
    
    getApp()  {
        return this.byTag("my-app");
    }

    closeDrawer() {
        this.getApp().closeDrawer();
    }
}

function onElementReady(node, callback) {
    var check = function() {
        if (node.shadowRoot != null) {
            callback(node);    
        } else {
            setTimeout(check, 20);
        }
    } 
    setTimeout(check, 20);
}

class MenuItem {
    constructor(title, action = null) {
        this.title = title;
        this.action = action;
    }
}

window.Application = new Application();