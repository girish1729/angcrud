var app = angular.module('Crud', ['ngResource', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){  
	$urlRouterProvider.otherwise("/");
    $stateProvider
        .state('default', 
	{ url: "/",
	templateUrl: '/public/partials/main.html', 
	controller: 'Crudctrl'}
	);
}).controller('Crudctrl', function($scope, $http){  

	$scope.createapi = function() {
		$http.post('/api/create', { name : "Girish"})
			.then(function(resp) {
				alert(resp.data.status);
			}, function(e) {
				alert("Create failed");
			});
			
	};

	$scope.readapi = function() {
		$http.get('/api/read/name')
			.then(function(resp) {
				alert(resp.data.name);
			}, function(e) {
				alert("Read failed");
			});
			
	};

	$scope.updateapi = function() {
		$http.put('/api/update', { name : "Mango"})
			.then(function(resp) {
				alert(resp.data.name);
			}, function(e) {
				alert("Update failed");
			});
			
	};

	$scope.deleteapi = function() {
		$http.delete('/api/delete/name')
			.then(function(resp) {
				alert(resp.data.status);
			}, function(e) {
				alert("Delete failed");
			});
			
	};

});


