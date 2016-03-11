var turnusApp = angular
.module('turnusApp', ['ui.router', 'ngResource', 'lbServices', 'angularMoment'])
.config(function(LoopBackResourceProvider) {
    LoopBackResourceProvider.setUrlBase('https://turnus-server.herokuapp.com/api')
  })

  .run(function(amMoment) {
    amMoment.changeLocale('da');
});
