using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using project.Models;

namespace project.Controllers
{
    public class PieceController : Controller
    {
        private BuyContext context { get; set; }

        public PieceController(BuyContext ctx) { context = ctx; }
        public IActionResult Index()
        {
            var pieces = context.Pieces.Include(p => p.user).ToList();
            return View(pieces);
        }
        public IActionResult Search(string searchKey)
        {
            var pieces = context.Pieces.Where(p => p.PieceName.Contains(searchKey)).Include(p => p.user).ToList();
            return View("Index", pieces);

        }
        public IActionResult Delete(int id)
        {
            var pi = context.Pieces.Find(id);

            if (pi == null)
                return RedirectToAction("Index", "Piece");

            context.Pieces.Remove(pi);
            context.SaveChanges();
            return RedirectToAction("Index", "Piece");

        }



    }
}