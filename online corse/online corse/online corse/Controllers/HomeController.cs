using Microsoft.AspNetCore.Mvc;

namespace online_corse.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

    }
}
