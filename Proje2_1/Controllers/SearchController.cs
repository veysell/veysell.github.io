using BusinnesLayer.Concrete;
using DataAccessLayer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proje2_1.Controllers
{
    public class SearchController : Controller
    {
        ProductRepository productrepository = new ProductRepository();
        DataContext db = new DataContext();
        public ActionResult Search2()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Search2(string searchText)
        {
            if (searchText!=null)
            {
                var result = db.Products.Where(x => x.Name.Contains(searchText)).ToList();
                return View(result);
            }
            return View();
        }
    }
}