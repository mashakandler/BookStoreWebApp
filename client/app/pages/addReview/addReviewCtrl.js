(function(){
    app.controller('addReviewCtrl',  function($scope, $state, $stateParams, booksService, authenticationService){
       $scope.review = "";
       $scope.bookName = $stateParams.bookName;
       $scope.bookId = $stateParams.id;

       let user = authenticationService.getToken();
       if(!user){
            $state.go('login') 
       }

       $scope.addReview = function(){
            booksService.addReview($scope.bookId, $scope.review).then(function(){
                $state.go('books');
            }, function error(response) {
                alert("An error occured")
            });    
       }

    });
})();