using Microsoft.AspNetCore.Mvc;
using project.Models;

namespace project.Controllers
{
    public class HomeController : Controller
    {
        private readonly BuyContext context;

        public HomeController(BuyContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View(context.Pieces.ToList());
        }

    }
}
