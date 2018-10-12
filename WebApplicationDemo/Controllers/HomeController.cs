using WebApplicationDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace WebApplicationDemo.Controllers
{
    public class HomeController : BaseController
    {
        #region views

        public ActionResult EmptyIndex()
        {
            return View();
        }

        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult Example1()
        {
            return PartialView();
        }

        public ActionResult Example2()
        {
            return PartialView();
        }

        #endregion

        #region Actions
        public ActionResult GetAllFromSession()
        {
            return Success(TasksSession);
        }

        public ActionResult AddTaskInSession(TasksDTO task)
        {
            var list = TasksSession;
            if (list.FindIndex(f => f.Name == task.Name) < 0)
            {
                list.Add(task);
                TasksSession = list;
            }
            return Success(TasksSession);
        }

        public ActionResult DeletedTaskFromSession(string name)
        {
            var list = TasksSession;

            var toDel = list.FirstOrDefault(f => f.Name == name);
            if (toDel != null)
            {
                list.Remove(toDel);
                TasksSession = list;
            };
            return Success(TasksSession);
        }

        public ActionResult UpdateTask(TasksDTO task)
        {
            var list = TasksSession;

             var toUpdate = list.FirstOrDefault(f => f.Name == task.Name);
            if (toUpdate != null)
            {
                list.FirstOrDefault(f => f.Name == task.Name).Desc = task.Desc;
                TasksSession = list;
            };
            return Success(TasksSession);
        }

        #endregion

        #region Session
        private static List<TasksDTO> TasksSession
        {
            get
            {
                List<TasksDTO> objects = (List<TasksDTO>)System.Web.HttpContext.Current.Session["TasksSession"];
                if (objects == null)
                {
                    objects = new List<TasksDTO>();
                    System.Web.HttpContext.Current.Session["TasksSession"] = objects; // Store the new list in the session object!
                }
                return objects;
            }

            set // Do you still need this setter?
            {
                System.Web.HttpContext.Current.Session["TasksSession"] = value;
            }
        }
        #endregion
    }
}