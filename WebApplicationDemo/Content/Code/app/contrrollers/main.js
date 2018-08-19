var App;
(function (App) {
    var Home;
    (function (Home) {
        var Controller;
        (function (Controller) {
            var MainCtrl = /** @class */ (function () {
                function MainCtrl($scope) {
                    this.$scope = $scope;
                }
                MainCtrl.$inject = ["$scope"];
                MainCtrl.ctrlName = 'mainCtrl';
                return MainCtrl;
            }());
            Controller.MainCtrl = MainCtrl;
            angular.module(App.moduleName).controller(MainCtrl.ctrlName, MainCtrl);
        })(Controller = Home.Controller || (Home.Controller = {}));
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map