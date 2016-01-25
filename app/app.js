var appName = 'usingAngularJs';

angular.module(appName, []);

angular.module(appName).run(function () {
    console.log('The app is now bootstrapped!');
});


angular.module(appName).controller(['$scope', function($scope){
    $scope.email = {
        recipient: '',
        message: '',
        sender: ''
    };

    $scope.sendEmail = function() {

    };

    $scope.saveDraft = function() {

    };

    $scope.discard = function() {
        
    }

}]);
