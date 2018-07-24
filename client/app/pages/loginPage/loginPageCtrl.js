(function(){
    app.controller('loginPageCtrl',  function($scope, $state,authenticationService){
        $scope.loginModel = {
            email : "",
            password : ""
        }

        $scope.error = "";

        $scope.loginSubmitHandler = function(){
            $scope.error = "";
            authenticationService.login($scope.loginModel, function success(response) {
                $state.go('books');
            }, function error(response) {
                if(response.status == 400){
                    $scope.error = "Wrong username or password"; 
                } else{
                    $scope.error = "Something went wrong, please try again."; 
                }
            });
        };
    });
})();