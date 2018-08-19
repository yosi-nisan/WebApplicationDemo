namespace Account.Controller {
    interface ILogin extends ng.IScope {
        searchFromGithub();
        addUserInSession(user)
        getUsersFromSession()
        isSession: boolean;
        allData: any;
        txtForSearch: string;
    }

    export class SearchingCtrl {

        static $inject = ["$scope", "$http", 'urls'];
        static ctrlName = 'searchingCtrl';

        constructor(private $scope: ILogin,
            private $http: ng.IHttpService,
            private urls: App.Service.Urls) {
            this.init();
        };

        private init = () => {
            this.$scope.txtForSearch = "";
            this.$scope.data = {};
            this.$scope.getUsersFromSession = this.getUsersFromSession;
            this.$scope.searchFromGithub = this.searchFromGithub;
            this.$scope.addUserInSession = this.addUserInSession;
        }

        searchFromGithub = () => {
            this.$scope.isSession = false;
            if (this.$scope.txtForSearch == "") {
                return
            }
            this.$http.get(this.urls.home.githubSearch + "?q=" + this.$scope.txtForSearch)
                .then((res: any) => {
                    if (res.status == 200) {
                        this.$scope.data = res.data;
                        this.saveStrInSession();
                    }
                });

        }

        addUserInSession = (user: any) => {

            let data = new Infra.Model.user;
            data.id = user.id;
            data.name = user.name;
            data.avatar_url = user.owner.avatar_url;
            data.updated_at = user.updated_at;

            this.$http.post(this.urls.home.addUserInSession, { user: data })
                .then((res: any) => {
                    console.log(res)
                });
        }

        getUsersFromSession = () => {
            this.$scope.isSession = true;
            this.$http.get(this.urls.home.getUsersFromSession)
                .then((res: any) => {
                    this.$scope.data.items = res.data.value;
                });
        }

        private saveStrInSession = () => {
            this.$http.post(this.urls.home.addStrSearchToSession, { str: this.$scope.txtForSearch })
                .then((res: any) => {
                    console.log(res)
                });
        }
    }

    angular.module(App.Home.moduleName).controller(SearchingCtrl.ctrlName, SearchingCtrl);
}