declare var theRoot: string;

namespace App.Service {
    export class Urls {

        public static srvName = 'urls';

        home = {
            emptyIndex: this.root + '',
            indexView: this.root + '/Home/Index',
            example1: this.root + '/Home/Example1',
            example2: this.root + '/Home/Example2',

            addStrSearchToSession: this.root + '/Home/AddStrSearchToSession',
            
            getAllFromSession: this.root + '/Home/GetAllFromSession',
            addTaskInSession: this.root + '/Home/AddTaskInSession',
            deletedTaskFromSession: this.root + '/Home/DeletedTaskFromSession',
            updateTask: this.root + '/Home/UpdateTask',
        }

        get root(): string {
            return theRoot ? theRoot : "";
        }
    }

    angular.module(App.moduleName).constant(Urls.srvName, new Urls());
}
