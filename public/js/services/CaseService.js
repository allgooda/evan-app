angular.module('CaseService', []).factory('Case', ['$http', function($http) {
    console.log('Case Service');

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/cases');
        },
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(caseData) {
            return $http.post('/api/cases', caseData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/cases/' + id);
        }
    }       

}]);