// our main controller
app.controller('mainController', ['$scope', '$http', function($scope, $http) {

    // object to hold all our data from the form
    $scope.formData = {};

    // loading variable to show the spinning loading icon
    $scope.loading = false;

    // holds our contact objects
    $scope.objects = [];

}]);
