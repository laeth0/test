using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using online_corse.Models;

namespace online_corse.Controllers
{
    public class StudentController : Controller
    {
        private OnlineCoursesContext context { get; set; }

        public StudentController(OnlineCoursesContext ctx) => context = ctx;

        public IActionResult Index()
        {
            var Students = context.Students.Include(s => s.Corse).ToList();
            return View(Students);
        }
        public IActionResult search(string searchKey)
        {
            var Students = context.Students.Include(s => s.Corse).Where(s => s.Name.Contains(searchKey)).ToList();
            return View("Index", Students);
        }

        public IActionResult Delete(int id)
        {
            Student st = context.Students.Find(id);
            if (st == null)
                return RedirectToAction("Index");
            context.Students.Remove(st);
            context.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Add()
        {
            ViewBag.Corses = context.Corses.OrderBy(s => s.CorseName).ToList();
            return View();
        }

        [HttpPost]
        public IActionResult Add(Student s)
        {
            context.Students.Add(s);
            context.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Login()
        {
            if (HttpContext.Session.GetInt32("stid") == null)
                return View();

            return View("Welcom");
        }

        [HttpPost]
        public IActionResult Login(string studentName, string stpass)
        {
            var s = context.Students.FirstOrDefault(s => s.Name == studentName && s.Password == stpass);
            if (s == null)
                return View("Login");

            HttpContext.Session.SetInt32("stid", s.StudentId);
            return View("Welcom", s.Name);
        }

        public IActionResult sDetails(int stid, String stpass)
        {
            if (HttpContext.Session.GetInt32("stid") == null)
                return RedirectToAction("Login");

            var studentID = HttpContext.Session.GetInt32("stid");
            var S = context.Students.Find(studentID);
            return View(S);
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }


        [HttpGet]
        public IActionResult ChangePassword()
        {
            if (HttpContext.Session.GetInt32("stid") == null)
                return RedirectToAction("Login");

            return View();
        }

        [HttpPost]
        public IActionResult ChangePassword(string newPass)
        {
            int? sid = HttpContext.Session.GetInt32("stid");
            var S = context.Students.Find(sid);
            S.Password = newPass;
            context.Students.Update(S);
            context.SaveChanges();

            return RedirectToAction("sDetails");
        }

    }


}
