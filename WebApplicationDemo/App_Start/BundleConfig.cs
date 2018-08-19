using System.Web.Optimization;

namespace WebApplicationDemo
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //BundleTable.EnableOptimizations = false;

            CSS(bundles);
            JS(bundles);
        }

        private static void CSS(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/libs/css")
                .Include("~/Content/libs/bootstrap/css/bootstrap.css")
                .Include("~/Content/libs/bootstrap/rtl/bootstrap-rtl.css"));

        }

        private static void JS(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/libs/js")
                .IncludeDirectory("~/Content/libs/angular", "*.js")
                .IncludeDirectory("~/Content/libs/jquery", "*.js")
                .Include("~/Content/libs/bootstrap/js/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/site/js")
                .IncludeDirectory("~/Content/code", "*.js", true));
        }
    }
}
