(function(){
    app.controller('addBookCtrl',  function($scope, $state, $stateParams, booksService, authenticationService){
       $scope.bookModel = {
        name: "",
        imageUrl: "",
        description: ""
       };


       let user = authenticationService.getToken();
       if(!user){
            $state.go('login') 
       }

       $scope.addBook = function(){
            booksService.addBook($scope.bookModel).then(function(){
                $state.go('books');
            }, function error(response) {
                alert("An error occured")
            });    
       }
    });
})();