var turnusApp = angular
.module('turnusApp', ['ui.router', 'ngResource', 'lbServices'])
.config(function(LoopBackResourceProvider) {
    LoopBackResourceProvider.setUrlBase('https://turnus-server.herokuapp.com/api')
  });
