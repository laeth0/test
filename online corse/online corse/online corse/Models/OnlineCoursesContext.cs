using Microsoft.EntityFrameworkCore;

namespace online_corse.Models
{
    public class OnlineCoursesContext : DbContext
    {
        public OnlineCoursesContext(DbContextOptions<OnlineCoursesContext> options) : base(options)

        { }

        public DbSet<Student> Students { get; set; }

        public DbSet<Corse> Corses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Corse>().HasData(

            new Corse { CorseId = 1, CorseName = "C++", CosrePrice = 150 },

            new Corse { CorseId = 2, CorseName = "front end ", CosrePrice = 60 },

            new Corse { CorseId = 3, CorseName = "Math", CosrePrice = 80 },

            new Corse { CorseId = 4, CorseName = "Web Programming", CosrePrice = 300 },

            new Corse { CorseId = 5, CorseName = "Embeded System", CosrePrice = 190 },

            new Corse { CorseId = 6, CorseName = "Java", CosrePrice = 160 },

            new Corse { CorseId = 7, CorseName = "English", CosrePrice = 90 },

            new Corse { CorseId = 8, CorseName = "Arabic", CosrePrice = 90 },

            new Corse { CorseId = 9, CorseName = "Python", CosrePrice = 130 },

            new Corse { CorseId = 10, CorseName = "Project Managment", CosrePrice = 110 }

            );

            modelBuilder.Entity<Student>().HasData(
            new Student
            {
                StudentId = 1,
                Name = "Ahmad",
                Average = 92,
                Password = "123",
                CorseId = 1
            },
            new Student
            {
                StudentId = 2,
                Name = "mohammed",
                Average = 99,
                Password = "212",
                CorseId = 1
            },
            new Student
            {
                StudentId = 3,
                Name = "omar",
                Average = 97,
                Password = "262",
                CorseId = 6
            },
            new Student
            {
                StudentId = 4,
                Name = "suha",
                Average = 89,
                Password = "762",
                CorseId = 4
            },
            new Student
            {
                StudentId = 5,
                Name = "Rawan",
                Average = 97,
                Password = "292",
                CorseId = 7
            },
            new Student
            {
                StudentId = 6,
                Name = "Noor",
                Average = 74,
                Password = "202",
                CorseId = 2
            },
            new Student
            {
                StudentId = 7,
                Name = "Raghad",
                Average = 97,
                Password = "202",
                CorseId = 3
            },
            new Student
            {
                StudentId = 8,
                Name = "Zaid",
                Average = 67,
                Password = "162",
                CorseId = 3
            },
            new Student
            {
                StudentId = 9,
                Name = "Mohammed",
                Average = 88,
                Password = "200",
                CorseId = 3
            },
            new Student
            {
                StudentId = 10,
                Name = "yazan",
                Average = 57,
                Password = "772",
                CorseId = 2
            },
             new Student
             {
                 StudentId = 11,
                 Name = "yara",
                 Average = 91,
                 Password = "777",
                 CorseId = 2
             }
        );
        }
    }
}

