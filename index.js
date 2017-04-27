(function (root, factory) {
    if (typeof module === "object" && module.exports) {
       
        module.exports = factory();
    } else {
        
        root.movepopup = factory(root);
  }
}(this, function (root) {
	
  /**
   *@param {Object} helper
   *@argument {Function} callback
   * 
   */        
  var setAbortCallback = function (helper, callback) {
              if (callback) {
                  var original = helper.firstChild.onclick;
                  helper.firstChild.onclick= function () {
                      original();
                      callback();
                  };
              }
          };
	
	if (root) {
      var style =root.document.createElement("style");
          style.type ="text/css";
          var implCss = "#movepopup { box-shadow: 10px 10px 5px #888888; " 
                      + "padding: 0; border: 2px solid black; width: 21em; height: 10em; top: 50%; left: 40%; position: fixed }"
                      + "#movepopup p { padding-top: 2em;padding-right: 0.25em;padding-left: 0.25em;color : black;width: 100% }"
                      + "#movepopup p { height: 2em;font-size: 14px;text-align : center;font-weight: bold }"
                      + "#movepopup a { color: navy;border: 1px solid navy;float: right;margin-top: 0.25em;margin-right: 0.25em }"
                      + "#movepopup a { border-radius: 10% }"
                      + "#movepopup button { color: green;position: relative;display: inline;left: 7em }"
                      + "#movepopup:hover button { color: red;height: 2em }";
          	          
       
          /**
           * @type {TextNode}
           */
          var css = root.document.createTextNode(implCss);
          

      
      
      if (style.styleSheet) {
          style.styleSheet.cssText = css.nodeValue;
      }else {
          style.appendChild(css);
      }
      
      root.document.getElementsByTagName("head")[0].appendChild(style);
      
      
    }
                
      /**
       * @return {string} message
       */
      var getHelper =function (message) {
         if (typeof message !== "string") {
             throw new Error("Message must be string !");
         }
         
         /**
          * Create movepopup button
          * 
          * @type {HTMLElement}
          */
         var div = root.document.createElement("div");
         var p = root.document.createElement("p");
         var close = root.document.createElement("a");
         
         var button = root.document.createElement("button");
         var button2 =root.document.createElement("button");
         
        /**
          * @type {TextNode}
          */
         var pText =root.document.createTextNode(message);
         close.innerHTML ="&#x274C;";
         /**
          * @type {HTMLElement}
          */
         var buttonText = root.document.createTextNode("OK");
         var buttonText2 =root.document.createTextNode("Cancel");
          
          
           
          button2.setAttribute("id","bout2");
          p.setAttribute("id","textMess");        
          div.setAttribute("id", "movepopup");
       
          p.appendChild(pText);
          button.appendChild(buttonText);
          button2.appendChild(buttonText2);
          div.appendChild(close);
          div.appendChild(p);
          div.appendChild(button);
          div.appendChild(button2);
          
          
           close.onclick = function () {
                  close.parentNode.parentNode.removeChild(close.parentNode);
               
          }; 
          /**
           * @returns {String} button
           */
           button.onclick = function () {
              root.document.getElementById("textMess")
                  .innerHTML = "Thanks to edit your text";
          };
          /**
           * @returns {String} button2
           */
          button2.onclick = function () {
           root.document.getElementById("textMess")
                  .innerHTML = "Your  Event";  
          };
         
          
          return div;
         
         
        
      };
       /**
        * Create movepopup
        * 
        * @param {Object} helper movepoup namespace
        * @returns {HTMLElement} movepopup html element
        * @throws {Error} for invalid argument exception
        */
         var log = function (helper) {
              if (!(helper instanceof root.HTMLElement)
                 || !root.document.body) 
                     throw new Error(
                         "Require a valid element and body");
             
                      root.document.body.appendChild(helper);
       };
            
      

 

   
    return (function () {
               var self= {}; 
    	
            self.init= function (window) {
                    if (!window || !window.document) {
                        throw new Error("Move PopUp requires a window with a document");
                    } 
                    root =window;
            },
//          
//          
           /**
           *Create emergency notification 
           * 
           *@memberOf movepopup
           *@param {String} message display movepopup message
           *@param {function} abortCallBack abort callback
           *@returns {Object} movepopup namespace
           * 
           */ 
           self.emergency= function (message,abortCallBack) {
               var helper = getHelper(message);
               helper.setAttribute("class","emergency");
               setAbortCallback(helper, abortCallBack);
               log(helper);
               
               
               
           },
           /**
            * Create alert notification
            * 
            * @memberOf movepopup
            * @return {Object} movepopup namespace
            * @param {string} message movepopup message
            * @param {function} abortCallBack abort callback
            * @returns {Object} movepopup namespace
            */
           self.alert= function (message, abortCallBack) {
               var helper = getHelper(message);
               helper.setAttribute("class","alert");
               setAbortCallback(helper, abortCallBack);
               log(helper);
            
            
           },
           /**
            * Create error notification
            * 
            * @memberOf movepopup
            * @return {Object} movepopup namespace
            * @param {string} message movepopup message
            * @param {function} abortCallBack abort callback
            * @returns {Object} movepopup namespace
            */
           self.error= function (message, abortCallBack) {
               var helper = getHelper(message);
               helper.setAttribute("class","error");
               setAbortCallback(helper, abortCallBack);
               log(helper);   
           },
           /**
            * Create warning notification
            *
            * @memberOf movepopup 
            * @return {Object} movepopup namespace
            * @param {string} message movepopup message
            * @param {function} abortCallBack abort callback
            * @returns {Object} movepopup namespace
            */
           self.warning= function (message, abortCallBack) {
             var helper = getHelper(message);
               helper.setAttribute("class","warning");
               setAbortCallback(helper, abortCallBack);
               log(helper);  
           },
           /**
            * Create notice notification
            *
            * @memberOf movepopup 
            * @return {Object} movepopup namespace
            * @param {string} message movepopup message
            * @param {function} abortCallBack abort callback
            * @returns {Object} movepopup namespace
            */
           self.notice= function (message, abortCallBack) {
             var helper = getHelper(message);
               helper.setAttribute("class","notice");
               setAbortCallback(helper, abortCallBack);
               log(helper);  
           },
           /**
            * Create info notification
            *
            * @memberOf movepopup 
            * @return {Object} movepopup namespace
            * @param {string} message movepopup message
            * @param {function} abortCallBack abort callback
            * @returns {Object} movepopup namespace
            */
           self.info= function (message, abortCallBack) {
               var helper = getHelper(message);
               helper.setAttribute("class","info");
               setAbortCallback(helper, abortCallBack);
               log(helper);
           },
           /**
            * Create debug notification
            *
            *@memberOf movepopup
            * @return {Object} movepopup namespace
            * @param {string} message movepopup message
            * @param {function} abortCallBack abort callback
            * @returns {Object} movepopup namespace
            */
           self.debug= function (message, abortCallBack) {
               var helper = getHelper(message);
               helper.setAttribute("class","debug");
               setAbortCallback(helper, abortCallBack);
               log(helper);
           }   
           
		   return self; 
       }());
    	
    	
    	
    
}));
