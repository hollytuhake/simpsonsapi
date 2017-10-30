console.log('js sourced');
var myApp = angular.module('myApp', []);
myApp.controller('SimpsonsController', function ($http) {
    var sc = this;
    getQuote();
    function getQuote(){
        console.log('in getQuote')
        $http.get('https://thesimpsonsquoteapi.glitch.me/quotes').then(function(response){
            console.log(response);
            sc.message = response.data[0].quote + ' - ' + response.data[0].character;
        });
    }
});