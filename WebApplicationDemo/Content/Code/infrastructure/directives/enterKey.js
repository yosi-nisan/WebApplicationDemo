var App;
(function (App) {
    var Directives;
    (function (Directives) {
        var EnterKey = /** @class */ (function () {
            function EnterKey() {
                this.restrict = 'A';
                this.link = function ($scope, $element, $attrs) {
                    $element.bind("keydown keypress", function (event) {
                        var keyCode = event.which || event.keyCode;
                        if (keyCode === 13) {
                            $scope.$apply(function () {
                                $scope.$eval($attrs.rdnEnterKey);
                            });
                            event.preventDefault();
                        }
                    });
                };
            }
            EnterKey.factory = function () {
                var directive = function () { return new EnterKey(); };
                directive.$inject = [];
                return directive;
            };
            return EnterKey;
        }());
        Directives.EnterKey = EnterKey;
        angular.module(Infra.moduleName).directive('rdnEnterKey', App.Directives.EnterKey.factory());
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
//# sourceMappingURL=enterKey.js.map