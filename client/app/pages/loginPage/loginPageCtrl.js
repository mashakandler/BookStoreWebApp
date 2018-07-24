(function(){
    app.controller('loginPageCtrl',  function($scope, $state,authenticationService){
        $scope.loginModel = {
            email : "user@example.com",
            password : "password2!"
        }

        $scope.loginSubmitHandler = function(){
            authenticationService.login($scope.loginModel, function success(response) {
                $state.go('books');
            }, function error(response) {
                alert("An error occured");
            });           
        };
    });
})();