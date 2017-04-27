

var movepopup = require("./../index.js");

var mocha = require("mocha");
var chai = require("chai");




//description du test suite (le sujet du test)
mocha.describe("movepopup",function () {
    
    //description du test  case (le cas du test)
//    mocha.it("Emergency is a function", function() {
//        chai.assert("function" === typeof movepopup.emergency);
//    });
    
    mocha.it("movepopup is a module", function() {
        chai.assert("object" === typeof movepopup);
        
    });
    mocha.describe("Methods", function () {
        mocha.it("Emergency is a function", function() {
        chai.assert("function" === typeof movepopup.emergency);
        
        });
        mocha.it("Alert", function() {
            chai.assert("function" === typeof movepopup.alert);
        });
        mocha.it("Error", function() {
            chai.assert("function" === typeof movepopup.error);
        });
        mocha.it("Warning", function() {
            chai.assert("function" === typeof movepopup.warning);
        });
        mocha.it("Notice", function() {
            chai.assert("function" === typeof movepopup.notice);
        });
        mocha.it("Info", function() {
            chai.assert("function" === typeof movepopup.info);
        });
        mocha.it("Debug", function() {
            chai.assert("function" === typeof movepopup.debug);
        });
    
    });
      
});
