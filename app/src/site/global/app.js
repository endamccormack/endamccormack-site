'use strict';

angular
  .module('starterApp', ['ngMaterial', 'site', 'ngRoute'])
  .config(function($mdThemingProvider, $mdIconProvider, $routeProvider){

        $routeProvider.when('/', { templateUrl: 'src/site/partials/home.html' });
        $routeProvider.when('/home', { templateUrl: 'src/site/partials/home.html' });
        $routeProvider.when('/#/:name', { templateUrl: 'src/site/partials/test.html', controller: RouteController });
        $routeProvider.otherwise({redirectTo: '/'});

        $mdIconProvider
          .defaultIconSet("./assets/svg/avatars.svg", 128)
          .icon("menu"       , "./assets/svg/menu.svg"        , 24)
          .icon("share"      , "./assets/svg/share.svg"       , 24)
          .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
          .icon("phone"      , "./assets/svg/phone.svg"       , 512)
          .icon("more"       , "./assets/svg/more.svg"        , 24);

        $mdThemingProvider.theme('default')
          .primaryPalette('green')
          .accentPalette('grey');
  });
