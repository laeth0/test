using System.ComponentModel.DataAnnotations;

namespace Library.Models
{
    public class Author
    {
        public int AuthorId { get;set; }


        [Required]
        [StringLength(30, MinimumLength = 3)]
        public string authorName { get; set; } = string.Empty;


        [Required]
        public DateTime authorBirthDate { get; set; }



        [Required]
        public string authorGender { get; set; }

    }
}
