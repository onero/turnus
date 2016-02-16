var turnusApp = angular
.module('turnusApp', ['ui.router', 'ngResource', 'lbServices'])
.config(function(LoopBackResourceProvider) {
    LoopBackResourceProvider.setUrlBase('http://127.0.0.1:3000/api')
  });
