turnusApp.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
 $urlRouterProvider.otherwise("/home");

 $stateProvider
   .state('home', {
     url: "/home",
     templateUrl: "src/views/home.html",
     controller: "mainCtrl"
   })
   .state('turnus', {
     url: "/turnus",
     templateUrl: "src/views/turnus.html",
     controller: "mainCtrl"
   })
   .state('workers', {
     url: "/workers",
     templateUrl: "src/views/workers.html",
     controller: "mainCtrl"
   })
});
