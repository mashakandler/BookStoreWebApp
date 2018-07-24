(function(){
    app.controller('addBookCtrl',  function($scope, $state, $stateParams, booksService, authenticationService){
       $scope.bookModel = {
        name: "",
        imageUrl: "",
        description: ""
       };

       $scope.error = "";


       let user = authenticationService.getToken();
       if(!user){
            $state.go('login') 
       }

       $scope.addBook = function(){
            booksService.addBook($scope.bookModel).then(function(){
                $state.go('books');
            }, function error(response) {
                if(response.status == 401){
                    $scope.error = "Only admins can add books to the systems"; 
                } else{
                    $scope.error = "Something went wrong, please try again."; 
                }
            });    
       }
    });
})();