(function(){
    app.factory('booksService', ['$http','authenticationService', function($http, authenticationService) {

        var urlBase = '/books';
        var dataFactory = {};
        var headers = {};

        dataFactory.getBooks = function () {
            return $http.get(urlBase, {
                headers: {'x-auth': authenticationService.getToken()}
            });
        };

        dataFactory.addBook = function (bookModel) {
            return $http.post(urlBase, bookModel, {
                headers: {'x-auth': authenticationService.getToken()}
            });
        };
        
        dataFactory.showReviews =  function (id, review) {
            return $http.get(`${urlBase}/${id}/reviews`, {
                headers: {'x-auth': authenticationService.getToken()},
            }, );
        };

        dataFactory.addReview =  function (id, review) {
            return $http.post(`${urlBase}/${id}/reviews`,{review:review}, {
                headers: {'x-auth': authenticationService.getToken()},
            }, );
        };

        return dataFactory;
    }]);
})();