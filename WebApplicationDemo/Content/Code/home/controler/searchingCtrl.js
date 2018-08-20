var Account;
(function (Account) {
    var Controller;
    (function (Controller) {
        var SearchingCtrl = /** @class */ (function () {
            function SearchingCtrl($scope, $http, urls) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.urls = urls;
                this.init = function () {
                    _this.$scope.txtForSearch = "";
                    _this.$scope.data = {};
                    _this.$scope.getUsersFromSession = _this.getUsersFromSession;
                    _this.$scope.searchFromGithub = _this.searchFromGithub;
                    _this.$scope.addUserInSession = _this.addUserInSession;
                };
                this.searchFromGithub = function () {
                    _this.$scope.isSession = false;
                    _this.$scope.loading = true;
                    if (_this.$scope.txtForSearch == "") {
                        return;
                    }
                    _this.$http.get(_this.urls.home.githubSearch + "?q=" + _this.$scope.txtForSearch)
                        .then(function (res) {
                        if (res.status == 200) {
                            _this.$scope.data = res.data;
                            _this.saveStrInSession();
                        }
                        _this.$scope.loading = false;
                    });
                };
                this.addUserInSession = function (user) {
                    var data = new Infra.Model.user;
                    data.id = user.id;
                    data.name = user.name;
                    data.avatar_url = user.owner.avatar_url;
                    data.updated_at = user.updated_at;
                    _this.$http.post(_this.urls.home.addUserInSession, { user: data })
                        .then(function (res) {
                        console.log(res);
                    });
                };
                this.getUsersFromSession = function () {
                    _this.$scope.isSession = true;
                    _this.$scope.loading = true;
                    _this.$http.get(_this.urls.home.getUsersFromSession)
                        .then(function (res) {
                        _this.$scope.data.items = res.data.value;
                        _this.$scope.loading = false;
                    });
                };
                this.saveStrInSession = function () {
                    _this.$http.post(_this.urls.home.addStrSearchToSession, { str: _this.$scope.txtForSearch })
                        .then(function (res) {
                        console.log(res);
                    });
                };
                this.init();
            }
            ;
            SearchingCtrl.$inject = ["$scope", "$http", 'urls'];
            SearchingCtrl.ctrlName = 'searchingCtrl';
            return SearchingCtrl;
        }());
        Controller.SearchingCtrl = SearchingCtrl;
        angular.module(App.Home.moduleName).controller(SearchingCtrl.ctrlName, SearchingCtrl);
    })(Controller = Account.Controller || (Account.Controller = {}));
})(Account || (Account = {}));
//# sourceMappingURL=searchingCtrl.js.map