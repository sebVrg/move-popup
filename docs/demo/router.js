
var TempRouter = window.Backbone.Router.extend(
        
    (function () {

        var pageView = new PageView({
            model: new PageModel()
        });

        return {
            routes: {
                "home": "home",
                "emer": "emer",
                "aler": "aler",
                "erro": "erro", 
                "warn": "warn",
                "noti": "noti",
                "info": "info",
                "debu": "debu",
                "*actions": "defaultRoute"
            },
            home: function () {
                pageView.model.url = "ressource/home.json";
                pageView.page = "#home";
                pageView.update();
                console.log("rte home");
            },
            emer: function () {
                pageView.model.url = "ressource/emergency.json";
                pageView.page = "#emer";
                pageView.update();
                console.log("rte emergency");
            },
            aler: function () {
                pageView.model.url = "ressource/alert.json";
                pageView.page  = "#aler";
                pageView.update();
                console.log("rte alert");
            },
            erro: function () {
                pageView.model.url = "ressource/error.json";
                pageView.page  = "#erro";
                pageView.update();
                console.log("route error");
            },
            warn: function () {
                pageView.model.url = "ressource/warning.json";
                pageView.page  = "#warn";
                pageView.update();
                console.log("rte ");
            },
            noti: function () {
                pageView.model.url = "ressource/notice.json";
                pageView.page  = "#noti";
                pageView.update();
                console.log("rte ");
            },
            info: function () {
                pageView.model.url = "ressource/info.json";
                pageView.page  = "#info";
                pageView.update();
                console.log("rte ");
            },
            debu: function () {
                pageView.model.url = "ressource/debug.json";
                pageView.page  = "#debu";
                pageView.update();
                console.log("rte ");
            },
            defaultRoute: function () {
                this.home();
            }
        };
    })()

 );
