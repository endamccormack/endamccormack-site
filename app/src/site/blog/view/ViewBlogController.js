'use strict';

var ViewBlogController = angular.module('ViewBlogController', []);

ViewBlogController.controller('viewBlogController',
    function($scope, $http, $compile, $sce, $routeParams) {
        
        var blog1 = 'https://raw.githubusercontent.com/endamccormack/endamccormack-site-content/master/live/blog/';
        
        $http.get(blog1 + $routeParams.blogName).then(function(msg) {
            var converter = new showdown.Converter();
            $scope.message = $sce.trustAsHtml(converter.makeHtml(msg.data));
        });
    }
);