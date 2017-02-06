angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log('routes');
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/cases', {
            templateUrl: 'views/case.html',
            controller: 'CaseController'
        });

    $locationProvider.html5Mode(true);

}]);
