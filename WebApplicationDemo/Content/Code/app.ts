namespace App {

    export const moduleName = 'app';

    var app = angular.module(moduleName, ['ui.router', 'home','infra']);

    app.config(theConfig);
    app.run(['$rootScope', '$state', theRun]);


    function theConfig(
        $state: angular.ui.IStateProvider,
        router: angular.ui.IUrlRouterProvider,
        urls: App.Service.Urls) {

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
}