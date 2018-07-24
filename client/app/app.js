var app = angular.module('flightApp', ['ui.router']);

app.config(function($stateProvider,  $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state("login", {
    url: "/",
    templateUrl: "/app/pages/loginPage/loginPage.html",
    controller: "loginPageCtrl"
  });

  $stateProvider.state("books", {
      url: "/books",
      templateUrl: "/app/pages/booksList/booksList.html",
      controller: "booksListCtrl"
  });

  $stateProvider.state("addBook", {
    url: "/addbook",
    templateUrl: "/app/pages/addBook/addBook.html",
    controller: "addBookCtrl"
  });

  $stateProvider.state("addReview", {
    url: "/addreview",
    templateUrl: "/app/pages/addReview/addreview.html",
    controller: "addReviewCtrl",
    params: {
      bookName: null,
      id: null
    }
  });

});