angular.module('CaseCtrl', []).controller('CaseController', ['Case', '$scope', function(Case, $scope) {

  console.log('Case Controller');
  $scope.tagline = 'The square root of life is pi!'; 
  console.log($scope.tagline);
  $scope.create = create;

  $scope.getCases = getCases;
  $scope.caseName;
  $scope.caseUrl;

  function create() {
    var data = {
      name: $scope.caseName,
      image_url: $scope.caseUrl,
    }
    Case.create(data)
      .then(function(newCase) {
        console.log(newCase);
        getCases();
      });
  } 


  function getCases() {
    Case.get()
      .then(function(cases) {
        $scope.cases = cases.data;
        console.log($scope.cases);
      });
  }

  getCases();

}]);