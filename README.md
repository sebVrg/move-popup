[![Codacy Badge](https://api.codacy.com/project/badge/Grade/006248766bbd420b9d02348dbe3d22d5)](https://www.codacy.com/app/sebVrg/move-popup?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sebVrg/move-popup&amp;utm_campaign=Badge_Grade)
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
[![Build Status](https://travis-ci.org/sebVrg/move-popup.svg?branch=master)](https://travis-ci.org/sebVrg/move-popup)
[![npm](https://img.shields.io/npm/v/npm.movepopup?style=plastic)]()


This package will help you determine the diferent level in dynamics style of log in accordance with PSR3.


## Description
 
 This popup will display on your events choice in agreement with PSR-3.
 Your visitors will not troubled by the freeze of your web application.
 In material design philosophy you can changes effects and transitions like box-shadow, transitions , 
 movements from css files (and maybe discovering the css3 dimension).
 This popup is integrated in one page application thanks to backbone and Jquery Mobile in responsive mode 
 and perhaps will inspire phone developpers.

## Demo

[Moove PopUp](https://sebvrg.github.io/move-popup/)

##  Code Exemple
```js
movepopup->emergency("Your message");
```
this popup Will give you a diferent style depending on the level of alert 
or depending on the event you are looking for.

## Inspiration
Learning from PHP[ psr-3](http://php-fig/pr-3)
interface

## Learning
 
 Design patterns usage in the main file (index.js) will be help us to organize and optimize features and reusability of content code.
The file Index.js is based on the use of a closure assigned to a variable, that will allow objects use in a one method and will retain acces to declared variables in immediately invoked function.
Also, as the example below shows, the use of callback function will allow us to manage several events to call her.


''

    var movepopup = (function() {
        var setAbortCallback = function (helper, callback) {
                if (callback) {
                    var original = helper.firstChild.onclick;
                    helper.firstChild.onclick= function () {
                        original();
                        callback();
                    };
                }
            };
            

''

## About Used Tech
 
 
* [jQuery Mobile](https://jquerymobile.com/)- Downloading ressources
 
* [Backbone.js](http://backbonejs.org/)

* [Underscore.js](http://underscorejs.org/)

Application Template for using Backbone.js and jQuery Mobile.

Backbone.js is used for code organization (Models, Views) and "routing".

jQuery Mobile is used for its mobile styles and widgets. 
The routing and navigation capabilities of jQuery Mobile are disbled to let Backbone.js handle these requirements.

 >why using these tech :
 
 If you are working on a JavaScript heavy application (think jQuery Mobile, etc.),
 you probably will want to look at some JavaScript libraries to help add structure,
 consistency and convenience to your applications. 
 
 To quote Backbone themselves, it provides "models with key-value binding and custom events,
 collections with a rich API of enumerable functions, views with declarative event handling,
 and connects it all to your existing application over a RESTful JSON interface."
 This is really a great summary of what Backbone can provide to your application. 
 So, Backbone's event model, the user interface will update as the model changes or new models are created. 
 
 >to resume, Backbone will help you to :
 
 -Organize the structure to your application
 -Simplify server-side persistence
 -Decouple the DOM from your page's data
 -Model data, views and routers in a succinct manner
 -Provide DOM, model and collection syncronization
 
 >and about underscore.js ?
 
 Currently, it is widely used with Backbone.js to use MVC architecture for creating a one page Javascript Web app.
 The most significant ability of underscore.js is the ability of templating (which jQuery can not do).
 This library has many other useful functions, which are independent of other Javascript libraries.
 



### Installation
 
Download demo folder and try it !

## Authors
sebVrg   

## Copyright
MIT
