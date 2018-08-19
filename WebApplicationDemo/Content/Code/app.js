var App;
(function (App) {
    App.moduleName = 'app';
    var app = angular.module(App.moduleName, ['ui.router', 'home', 'infra']);
    app.config(theConfig);
    app.run(['$rootScope', '$state', theRun]);
    function theConfig($state, router, urls) {
        router.otherwise('/app/example1');
        $state.state('app', {
            url: '/app',
            templateUrl: urls.home.indexView,
            abstract: true
        }).state('app.example1', {
            url: '/example1',
            templateUrl: urls.home.example1
        }).state('app.example2', {
            url: '/example2',
            templateUrl: urls.home.example2
        });
    }
    function theRun($rootScope, $state) {
        $rootScope.$state = $state;
    }
    theConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'urls'];
})(App || (App = {}));
//# sourceMappingURL=app.js.map