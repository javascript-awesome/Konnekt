if(!K_Components) K_Components = {};
K_Components["todoinformation"] = (function(){
/*********************************
 *  todoinformation
 *  Created by keleko34
 *  To describe information about the app
 ********************************/

function todoinformation()
{
  /* ATTRIBUTES */

}

/* PROTOTYPES */

todoinformation.prototype.k_html = "<!-- todoinformation Created by keleko34, To describe information about the app --><div class='todoinformation'>  <h1 class='todoinformation__title'>Information</h1>  <div class='todoinformation__content'>    <div class='todoinformation__content__text'>      This example app was created by <span><a class='todoinformation__content__text__inlinelink' href='https://github.com/keleko34'>https://github.com/keleko34</a></span>    </div>    <div class='todoinformation__content__text'>      It is meant to show off the basics of how to use the konnektjs framework to create an app.    </div>    <div class='todoinformation__content__text'>      <a class='todoinformation__content__text__inlinelink' href='/'>Return to app</a>    </div>  </div></div>";
todoinformation.prototype.k_css = "/********************************* *  todoinformation *  Created by keleko34 *  To describe information about the app ********************************/.todoinformation {  background: #F2F2F2;  width: 100%;  height: 100%;  position: absolute;}.todoinformation__title {  font-family: sans-serif;  color: #c8c8c8;  font-size: 40px;  margin: 50px auto 10px auto;  width: 600px;  text-align: center;}.todoinformation__content {  width: 600px;  margin: 0px auto;  height: 400px;  background: #ffffff;  border-radius: 3px;  box-shadow: 0px 3px 12px -3px #333;}.todoinformation__content__text {  font-size: 18px;  font-family: sans-serif;  text-decoration: none;  padding:20px;  color:#b9b9b9;  text-align: center;}.todoinformation__content__text__inlinelink {  font-size: 16px;  font-family: sans-serif;  text-decoration: none;  color: darkseagreen;  cursor:pointer;}";
return todoinformation;
}());