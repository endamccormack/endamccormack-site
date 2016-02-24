angular
  .module('starterApp', ['ngMaterial', 'site', 'ngRoute',
                  'RouteController'])
  .config(function($mdThemingProvider, $mdIconProvider, $routeProvider) {

    $routeProvider
    .when('/', {
      templateUrl: 'src/site/partials/home.html'
    })
    .when('/:url', {
      templateUrl: 'src/site/partials/test.html',
      controller: 'mainController'
    });

    $mdIconProvider
      .defaultIconSet('./assets/svg/avatars.svg',           128)
      .icon('menu',         './assets/svg/menu.svg',        24)
      .icon('share',        './assets/svg/share.svg',       24)
      .icon('google_plus',  './assets/svg/google_plus.svg', 512)
      .icon('hangouts',     './assets/svg/hangouts.svg',    512)
      .icon('twitter',      './assets/svg/twitter.svg',     512)
      .icon('phone',        './assets/svg/phone.svg',       512)
      .icon('more',         './assets/svg/more.svg',        24);

    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('brown');
  });
