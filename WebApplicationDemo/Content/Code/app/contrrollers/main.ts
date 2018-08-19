namespace App.Home.Controller {
    interface IMainCtrl extends ng.IScope {

    }
    declare var AppFunctions;
    declare var Pace;

    export class MainCtrl {
        static $inject = ["$scope"];
        static ctrlName = 'mainCtrl';

        constructor(private $scope: IMainCtrl) {
        }
    }
    angular.module(App.moduleName).controller(MainCtrl.ctrlName, MainCtrl);
}