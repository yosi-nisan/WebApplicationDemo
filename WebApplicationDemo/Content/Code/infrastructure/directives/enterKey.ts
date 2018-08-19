namespace App.Directives {

    export class EnterKey implements ng.IDirective {
        restrict = 'A';
        link = ($scope: ng.IScope, $element: JQuery, $attrs) => {
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

        static factory(): ng.IDirectiveFactory {
            const directive = () => new EnterKey();
            directive.$inject = [];
            return directive;
        }
    }
    angular.module(Infra.moduleName).directive('rdnEnterKey', App.Directives.EnterKey.factory());
}