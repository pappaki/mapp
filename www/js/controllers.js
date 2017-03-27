angular.module('app.controllers', [])
  
.controller('tripPlannerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.destination = {from: null, to: null};
}])
   
.controller('yourRouteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.from_latitude = $stateParams.from_latitude;
	$scope.from_longitude = $stateParams.from_longitude;
	$scope.to_latitude = $stateParams.to_latitude;
	$scope.to_longitude = $stateParams.to_longitude;
}])
 
