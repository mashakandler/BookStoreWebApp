(function(){
    app.controller('booksListCtrl',  function($scope, $state,authenticationService, booksService){
        $scope.bookListModel = []
        
        let user = authenticationService.getToken();
        if(!user){
             $state.go('login') 
        }

        booksService.getBooks().then(function(response){
            $scope.bookListModel = response.data.books;
        },function(){

        })

        $scope.showReviews = function(book){
            book.showReviews =  !book.showReviews;
            if(book.showReviews){
                booksService.showReviews(book._id).then(function(response){
                    book.reviews = response.data.reviews;
                },function(){
        
                })
            }
        }

        $scope.addReview = function(book){
            $state.go('addReview',{ bookName:book.name, id:book._id});
        }

        $scope.addBook = function(){
            $state.go('addBook');
        }
    });
})();

