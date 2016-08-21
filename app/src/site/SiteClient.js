(function() {
  'use strict';

  angular.module('site')
         .service('siteClient', ['$q', '$http', SiteClient]);

  var url = 'https://api.github.com/repos/endamccormack' +
            '/endamccormack-site-content/contents/live';

  function SiteClient($q, $http) {
    var pages = [ ];
    return {
      loadAllPages: function() {

        // Simulate async nature of real remote calls
        return $q.when($http.get(url).
          success(function(data, status, headers, config) {
            return data;
          })
        );
      }
    };
  }

})();
