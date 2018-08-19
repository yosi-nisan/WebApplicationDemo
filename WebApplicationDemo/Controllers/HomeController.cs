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

        #region actions
        public ActionResult AddStrSearchToSession(string str)
        {
            var list = MySession;
            if (!list.Any(x => x.Contains(str)))
            {
                list.Add(str);
                MySession = list;
            }

            return Success(MySession);
        }

        public ActionResult AddUserInSession(User user)
        {
            var list = UserSession;
            if (list.FindIndex(f => f.Id == user.Id) < 0)
            {
                list.Add(user);
                UserSession = list;
            }
            return Success(UserSession);
        }

        public ActionResult GetUsersFromSession()
        {
            return Success(UserSession);
        }

        #endregion

        private static List<string> MySession
        {
            get
            {
                List<string> objects = (List<string>)System.Web.HttpContext.Current.Session["search"];
                if (objects == null)
                {
                    objects = new List<string>();
                    System.Web.HttpContext.Current.Session["search"] = objects; // Store the new list in the session object!
                }
                return objects;
            }

            set // Do you still need this setter?
            {
                System.Web.HttpContext.Current.Session["search"] = value;
            }
        }

        private static List<User> UserSession
        {
            get
            {
                List<User> objects = (List<User>)System.Web.HttpContext.Current.Session["userSession"];
                if (objects == null)
                {
                    objects = new List<User>();
                    System.Web.HttpContext.Current.Session["userSession"] = objects; // Store the new list in the session object!
                }
                return objects;
            }

            set // Do you still need this setter?
            {
                System.Web.HttpContext.Current.Session["userSession"] = value;
            }
        }

    }
}