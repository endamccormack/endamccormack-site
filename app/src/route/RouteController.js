'use strict';

/* Controllers */
function RouteController($scope, $http, $route, $routeParams, $compile) {
    //$route.current.templateUrl = 'partials/' + $routeParams.name + ".html";
    $route.current.templateUrl = "src/partials/test.html";

    $http.get($route.current.templateUrl).then(function (msg) {
        $('#views').html($compile(msg.data)($scope));
    });
}
RouteController.$inject = ['$scope', '$http', '$route', '$routeParams', '$compile'];