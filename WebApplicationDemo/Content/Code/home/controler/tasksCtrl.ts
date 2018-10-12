namespace App.Home.Controller {
    interface ITask extends ng.IScope {
        task: Infra.Model.Task;
        data: Array<Infra.Model.Task>;
        isSession: boolean;

        getAllFromSession();
        addTaskToSession();
        deletedTaskFromSession(name: string);
        updateTask(task: Infra.Model.Task);
    }

    export class TaskCtrl {

        static $inject = ["$scope", "$http", 'urls'];
        static ctrlName = 'tasksCtrl';

        constructor(private $scope: ITask,
            private $http: ng.IHttpService,
            private urls: App.Service.Urls) {
            this.init();
        };

        private init = () => {
            this.getAllFromSession();
            this.$scope.data = new Array<Infra.Model.Task>();

            this.$scope.getAllFromSession = this.getAllFromSession;
            this.$scope.addTaskToSession = this.addTaskToSession;
            this.$scope.deletedTaskFromSession = this.deletedTaskFromSession;
            this.$scope.updateTask = this.updateTask;
        }

        getAllFromSession = () => {
            this.$scope.isSession = true;
            this.$http.get(this.urls.home.getAllFromSession)
                .then((res: any) => {
                    this.$scope.data = res.data.value;
                    if (res.data.value.length < 1) {
                        alert("אין משימות");
                    }
                });
        }

        addTaskToSession = () => {
            this.$http.post(this.urls.home.addTaskInSession, { task: this.$scope.task })
                .then((res: any) => {
                    this.$scope.task = new Infra.Model.Task();
                    this.$scope.data = res.data.value;
                    console.log(res.data.value)
                });
        }
        deletedTaskFromSession = (name: string) => {
            this.$http.post(this.urls.home.deletedTaskFromSession, { name: name })
                .then((res: any) => {
                    this.$scope.data = res.data.value;
                    console.log(res)
                });
        }

        updateTask = (task: Infra.Model.Task) => {
            task.update = false
            this.$http.post(this.urls.home.updateTask, task)
                .then((res: any) => {
                    console.log(res)
                });
        }

    }

    angular.module(App.Home.moduleName).controller(TaskCtrl.ctrlName, TaskCtrl);
}