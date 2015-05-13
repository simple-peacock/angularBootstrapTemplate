// setting up our our app
var app = angular.module('myapp', ['ngRoute']);

// configure our frontend routes
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'partials/index.html',
            controller  : 'mainController'
        })

        // route for the new contact form
        .when('/new', {
            templateUrl : 'partials/form.html',
            controller  : 'mainController'
        });
}]);
