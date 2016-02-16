turnusApp.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
 $urlRouterProvider.otherwise("/home");

 $stateProvider
   .state('home', {
     url: "/home",
     templateUrl: "templates/home.html",
     controller: "mainCtrl"
   })
   .state('turnus', {
     url: "/turnus",
     templateUrl: "templates/turnus.html",
     controller: "mainCtrl"
   })
   .state('workers', {
     url: "/workers",
     templateUrl: "templates/workers.html",
     controller: "mainCtrl"
   })
});
