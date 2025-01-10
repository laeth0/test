using Microsoft.AspNetCore.Mvc;
using project.Models;

namespace project.Controllers
{
    public class userController : Controller
    {
        private BuyContext context { get; set; }

        public userController(BuyContext ctx) => context = ctx;
        public IActionResult Index()
        {
            var users = context.Users.ToList();
            return View(users);
        }
        public IActionResult Search(string searchKey)
        {
            var users = context.Users.Where(u => u.UserName.Contains(searchKey)).ToList();
            return View("index", users);

        }
        public IActionResult Delete(int id)
        {
            user us = context.Users.Find(id);
            if (us != null)
            {
                context.Users.Remove(us);
                context.SaveChanges();
            }
            return RedirectToAction("Index", "user");
        }
        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Add(user u)
        {
            context.Users.Add(u);
            context.SaveChanges();
            return View("Login");
        }

        [HttpGet]
        public IActionResult Login()
        {
            if (HttpContext.Session.GetString("uEmail") == null)
                return View();
            return View("Welcome");

        }
        [HttpPost]
        public IActionResult Login(string uEmail, string upass)
        {
            var u = context.Users.Where(u => u.UserEmail == uEmail && u.Password == upass).FirstOrDefault();
            if (u == null)
                return View("Login");

            if (u.UserEmail == "jewellary@gmail.com" && u.Password == "0000")
            {
                HttpContext.Session.SetString("uEmail", u.UserEmail);
                HttpContext.Session.SetInt32("uid", u.UserId);
                return RedirectToAction("Index", "Piece");
            }
            else
            {
                HttpContext.Session.SetString("uEmail", u.UserEmail);
                HttpContext.Session.SetInt32("uid", u.UserId);
                return View("Welcome", u.UserName);
            }




        }

        public IActionResult UserDetails()
        {
            if (HttpContext.Session.GetInt32("uid") == null)
                return RedirectToAction("Login");
            else
            {
                int? UserId = HttpContext.Session.GetInt32("uid");
                user u = context.Users.Find(UserId);
                return View(u);
            }





        }
        public IActionResult Welcome()
        {
            int? UserId = HttpContext.Session.GetInt32("uid");
            var u = context.Users.Find(UserId);
            return View("Welcome", u.UserName);
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return View("Login");

        }
        public IActionResult Changepassword()

        {
            if (HttpContext.Session.GetInt32("uid") == null)
                return RedirectToAction("Login");

            return View();
        }
        [HttpPost]
        public IActionResult Changepassword(string newPassword)
        {
            int? userid = HttpContext.Session.GetInt32("uid");
            var u = context.Users.Find(userid);
            u.Password = newPassword;
            context.Users.Update(u);
            context.SaveChanges();
            return RedirectToAction("UserDetails");

        }

    }
}
