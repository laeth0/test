using System.ComponentModel.DataAnnotations;

namespace Library.Models
{
    public class User
    {
        public int UserId { get; set; }


        [Required]
        [StringLength(20, MinimumLength = 3)]
        public string userName { get; set; } = string.Empty;


        [Required]
        [StringLength(20, MinimumLength = 4)]
        public string userPass { get; set; } = string.Empty;



        [Required]
        public DateTime userBirthDate { get; set; } = DateTime.Now;



        [Required]
        public bool userGender { get; set; } = false;



        [Required]
        [DataType(DataType.EmailAddress)]
        public string userEmail { get; set; } = string.Empty;



        [Required]
        [StringLength(20, MinimumLength = 3)]
        public string userFname { get; set; } = string.Empty;



        public bool isAdmin { get; set; } = false;
    }
}

