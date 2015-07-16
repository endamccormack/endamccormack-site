/**
 * Created by endamccormack on 18/05/2015.
 */
(function() {

  angular
    .module('list')
    .controller('ListController', [
      '$http', ListController
    ]);

  function ListController($http) {
    function displayContent (page) {
      //self.selected = angular.isNumber(page) ? $scope.pages[page] : page["name"];
      self.selected = self.selected;
      //self.toggleList();
    }
  }

})();
