using System.ComponentModel.DataAnnotations;

namespace Library.Models
{
    public class Book
    {
        public int BookId { get; set; }


        [Required]
        public string bookTitle { get; set; } = string.Empty;



        [Required]
        public string bookDesc { get; set; } = string.Empty;


        [Required]
        public DateTime bookWritingDate { get; set; }


        [Required]
        public int AuthorId { get; set; }

        public Author? Author { get; set; }

    }
}
