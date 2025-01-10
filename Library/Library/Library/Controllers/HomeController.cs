using Library.Models;
using Microsoft.AspNetCore.Mvc;


namespace Library.Controllers
{
    public class HomeController : Controller
    {
        private LibraryContext context { get; set; }

        public HomeController(LibraryContext ctx)
        {
            context = ctx;
        }


        public IActionResult Index()
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                var user = context.Users.Find(HttpContext.Session.GetInt32("id"));
                return View(user);
            }
            return RedirectToAction("Login");
        }


        [HttpGet]
        public IActionResult Books()
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                List<Author> authors = context.Authors.ToList();
                ViewBag.allAuthor = authors;

                List<Book> books = context.Books.ToList();
                ViewBag.allBooks = books;
                return View();
            }
            return RedirectToAction("Login");
        }


        [HttpPost]
        public IActionResult Books(Book book)
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                if (ModelState.IsValid)
                {
                    context.Books.Add(book);
                    context.SaveChanges();
                }
                return RedirectToAction("Books");
            }
            return RedirectToAction("Login");
        }



        public IActionResult searchBook(string searchKey = "")
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                List<Book> books = context.Books.Where(s => s.bookTitle.Contains(searchKey)).OrderBy(m => m.BookId).ToList();
                ViewBag.allBooks = books;
                List<Author> authors = context.Authors.ToList();
                ViewBag.allAuthor = authors;
                return View("Books");
            }
            return RedirectToAction("Login");
        }



        public IActionResult deleteBook(int id)
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                var book = context.Books.Where(s => s.BookId == id).FirstOrDefault();
                context.Books.Remove(book);
                context.SaveChanges();
                return RedirectToAction("Books");
            }
            return RedirectToAction("Login");
        }





        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }



        [HttpPost]
        public IActionResult Register(User user)
        {

            if (ModelState.IsValid)
            {
                context.Users.Add(user);
                context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(user);
        }



        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }



        [HttpPost]
        public IActionResult Login(string name, string pass)
        {
            User user = context.Users.Where(m => m.userName == name && m.userPass == pass).FirstOrDefault();
            if (user != null)
            {
                HttpContext.Session.SetInt32("id", user.UserId);
                return RedirectToAction("Index");
            }
            return View();
        }


        [HttpGet]
        public IActionResult Authors()
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                List<Author> authors = context.Authors.ToList();
                ViewBag.allAuthors = authors;
                return View();
            }

            return RedirectToAction("Login");
        }



        [HttpPost]
        public IActionResult Authors(Author author)
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                if (ModelState.IsValid)
                {
                    context.Authors.Add(author);
                    context.SaveChanges();
                }
                return RedirectToAction("Authors");
            }
            return RedirectToAction("Login");
        }



        public IActionResult searchAuthor(string searchKey = "")
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                List<Author> authors = context.Authors.Where(s => s.authorName.Contains(searchKey)).OrderBy(m => m.AuthorId).ToList();
                ViewBag.allAuthors = authors;
                return View("Authors");
            }
            return RedirectToAction("Login");
        }



        public IActionResult deleteAuthor(int id)
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                var author = context.Authors.Where(s => s.AuthorId == id).FirstOrDefault();
                context.Authors.Remove(author);
                context.SaveChanges();
                return RedirectToAction("Authors");
            }
            return RedirectToAction("Login");
        }



        [HttpGet]
        public IActionResult changePass()
        {
            if (HttpContext.Session.GetInt32("id") != null)
            {
                return View();
            }
            return RedirectToAction("Login");
        }




        [HttpPost]
        public IActionResult changePass(string oldpass, string newpass)
        {
            if (HttpContext.Session.GetInt32("id") == null)
                return RedirectToAction("Login");

            var user = context.Users.Where(s => s.UserId == HttpContext.Session.GetInt32("id")).FirstOrDefault();
            if (user.userPass == oldpass)
            {
                user.userPass = newpass;
                context.Users.Update(user);
                context.SaveChanges();
                return RedirectToAction("Logout");
            }
            return View();
        }



        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }


    }
}