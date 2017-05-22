app.controller("pushNotificationController", function($scope, $http, $filter, $q, $location, $rootScope) {

	$scope.getnoticeboard = function() {
        console.log('Now trying to fetch Notice board of society');
        var req = {
            method: 'GET',
            url: $rootScope.constant.SERVICE_URL + '/society/noticeboard/getall'
        }

        $http(req).then(function successCallback(response) {
            console.log('Notice board recived');
            $scope.notices=response.data.body;
        }, function errorCallback(error) {
            debugger;
            console.log('Error because of connection');
        });
    }
    
    $scope.getnoticeboard = function() {
        console.log('Now trying to fetch Notice board of society');
        var req = {
            method: 'GET',
            url: $rootScope.constant.SERVICE_URL + '/society/noticeboard/getall'
        }

        $http(req).then(function successCallback(response) {
            console.log('Notice board recived');
            $scope.notices=response.data.body;
        }, function errorCallback(error) {
            debugger;
            console.log('Error because of connection');
        });
    }

     $scope.addnotice = function() {
        console.log('Adding Notice');
        var req = {
            method: 'POST',
            url: $rootScope.constant.SERVICE_URL + '/society/noticeboard/add',
            data:$scope.notice
        }

        $http(req).then(function successCallback(response) {
            console.log('Notice board recived');

        }, function errorCallback(error) {
            debugger;
            console.log('Error because of connection');
        });
    }

});