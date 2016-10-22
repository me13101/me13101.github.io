/**
 * 
 */

// function newsapi() {
//     $.ajax({
//         url: "https://newsapi.org/v1/sources?source=the-next-web&sortBy=latest&apiKey=ca73649cfc624eaf975ffa109305e988",
//         context: document.getElementById("news"),
//         success: function(result){

//         }});
//         //console.log("got here");
//     }

var home = angular.module('home', []);

home.controller('homeController', function ($scope) {
    $.ajax({
        url: "https://newsapi.org/v1/sources?source=the-next-web&sortBy=latest&apiKey=ca73649cfc624eaf975ffa109305e988",
        success: function(result){
            $scope.news = result;
            $scope.$applyAsync();
        }});
});
 var host = window.location.host;
 function getURL(res){
   if (res == "home"){
       return host+"/leagueDashboard.html";
   }
}