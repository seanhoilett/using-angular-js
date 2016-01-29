var appName = 'usingAngularJs';

angular.module(appName, []);

angular.module(appName).run(function () {
    console.log('The app is now bootstrapped!');
});


angular.module(appName).controller('EmailController', ['$scope', function($scope){
    $scope.email = {
        recipient: '',
        message: '',
        sender: ''
    };

    $scope.sendEmail = function() {
        alert('email sent!')
    };

    $scope.saveDraft = function() {

    };

    $scope.discard = function() {
        
    }
}]).directive('sean', function(){
    return {
        restrict: 'AE',
        link: function() {

        },
        scope: {
          firstName: '='
        },
        template: '<span>{{firstName}} Hoilett</span>'
    }
});
