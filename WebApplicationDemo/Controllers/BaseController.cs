using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplicationDemo.Controllers
{
    public class BaseController : Controller
    {
        #region Json

        protected ContentResult Success()
        {
            return Success(true);
        }

        protected ContentResult Success<T>(T value)
        {
            var json = JsonConvert.SerializeObject(new ResultData<T>()
            {
                Success = true,
                Value = value
            }, GetSerializerSettings());

            return Content(json, "application/json");
        }

        internal static JsonSerializerSettings GetSerializerSettings()
        {
            return new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                DateTimeZoneHandling = DateTimeZoneHandling.Local
            };
        }

        protected ContentResult Fail<T>(string message = "", T value = default(T))
        {
            var json = JsonConvert.SerializeObject(new ResultData<T>()
            {
                Success = false,
                Value = value,
                Message = message
            }, GetSerializerSettings());

            return Content(json, "application/json");
        }

        protected ContentResult Fail(string message = "")
        {
            return Fail<object>(message);
        }
        #endregion

        public class ResultData<T>
        {
            public bool Success { get; set; }
            public string Message { get; set; }
            public T Value { get; set; }
        }
    }
}