turnusApp.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
 $urlRouterProvider.otherwise("/home");

 $stateProvider
   .state('home', {
     url: "/home",
     templateUrl: "views/home.html",
     controller: "mainCtrl"
   })
   .state('turnus', {
     url: "/turnus",
     templateUrl: "views/turnus.html",
     controller: "mainCtrl"
   })
   .state('workers', {
     url: "/workers",
     templateUrl: "views/workers.html",
     controller: "mainCtrl"
   })
});
