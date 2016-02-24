'use strict';

var blog1 = 'https://raw.githubusercontent.com/endamccormack/' +
            'endamccormack-site-content/master/live/blog/blog1.md';

var RouteController = angular.module('RouteController', []);

RouteController.controller('mainController',
  function($scope, $http, $compile, $sce) {
    $http.get(blog1).then(function(msg) {
      var converter = new showdown.Converter();
      $scope.message = $sce.trustAsHtml(converter.makeHtml(msg.data));
    });
  }
);
