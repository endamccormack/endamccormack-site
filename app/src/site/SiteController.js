(function(){

  angular
       .module('site')
       .controller('SiteController', [
          'siteClient', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$http',
          SiteController
       ]);

  function SiteController( siteClient, $mdSidenav, $mdBottomSheet, $log, $q, $http) {
    var self = this;

    self.selected     = null;
    self.pages        = [ ];
    self.selectPage   = selectPage;
    self.toggleList   = togglePagesList;
    // self.share        = share;

    // Load all registered users

    siteClient
          .loadAllPages()
          .then( function( pages ) {
            self.pages    = pages.data;
            self.selected = self.pages[0]["name"];

            //remove the .extension
            self.pages.map(function(x, i, ar){
                ar[i]["name"] = ar[i]["name"].split(".")[0];
            });

          });

    function togglePagesList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectPage ( page ) {
      self.selected = angular.isNumber(page) ? $scope.pages[page] : page["name"];
      self.toggleList();
    }
  }
})();