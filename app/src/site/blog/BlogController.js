'use strict';

var BlogController = angular.module('BlogController', ['ngMaterial']);

BlogController.controller('blogController',
    function($scope, $http) {
        var blog1 = 'https://api.github.com/repos/endamccormack/endamccormack-site-content/contents/live/blog?ref=master';

        $scope.theme = "default";

        $http.get(blog1).then(function(msg) {
            $scope.blogs = msg.data;
        });
    }
);
