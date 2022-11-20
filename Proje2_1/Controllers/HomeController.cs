using BusinnesLayer.Concrete;
using System;
using PagedList;
using PagedList.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proje2_1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        ProductRepository productrepository = new ProductRepository();

        public ActionResult Index(int sayfa=1)
        {
            return View(productrepository.List().ToPagedList(sayfa,6));
        }
    }
}