using Microsoft.EntityFrameworkCore;

namespace project.Models
{
    public class BuyContext : DbContext
    {
        public BuyContext(DbContextOptions<BuyContext> options) : base(options)
        { }

        public DbSet<user> Users { get; set; }
        public DbSet<Piece> Pieces { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<user>().HasData(

                    new user
                    {
                        UserId = 1,
                        UserName = "ahmad",
                        UserEmail = "ahmad@gmail.com",
                        Password = "ahmad123",
                    },
                    new user
                    {
                        UserId = 2,
                        UserName = "omar",
                        UserEmail = "omar@gmail.com",
                        Password = "omar123",
                    },
                    new user
                    {
                        UserId = 3,
                        UserName = "Mohammad",
                        UserEmail = "Mohammad@gmail.com",
                        Password = "Mohammad123",
                    },
                    new user
                    {
                        UserId = 4,
                        UserName = "jewellary",
                        UserEmail = "jewellary@gmail.com",
                        Password = "0000",
                    }
                );

            modelBuilder.Entity<Piece>().HasData(
                new Piece
                {
                    UserId = 1,
                    PieceID = 100,
                    PieceName = "Necklace Pendant and Earrings",
                    Pieceprice = 150,
                },
                  new Piece
                  {
                      UserId = 2,
                      PieceID = 101,
                      PieceName = "Silver Bracelet",
                      Pieceprice = 120,
                  },
                   new Piece
                   {
                       UserId = 3,
                       PieceID = 102,
                       PieceName = "Gold Ring with Diamonds",
                       Pieceprice = 100,
                   },
                    new Piece
                    {
                        UserId = 3,
                        PieceID = 103,
                        PieceName = "Pendant Necklace and Earrings",
                        Pieceprice = 180,
                    },
                    new Piece
                    {
                        UserId = 3,
                        PieceID = 104,
                        PieceName = "Silver and Gold Necklace",
                        Pieceprice = 140,
                    },
                    new Piece
                    {
                        UserId = 2,
                        PieceID = 105,
                        PieceName = "Floral Ring with Diamonds",
                        Pieceprice = 180,
                    },
                    new Piece
                    {
                        UserId = 2,
                        PieceID = 106,
                        PieceName = "Silver Bracelet",
                        Pieceprice = 150,
                    },
                    new Piece
                    {
                        UserId = 2,
                        PieceID = 107,
                        PieceName = "Silver Ring with Diamonds",
                        Pieceprice = 100,
                    }
                );



        }
    }
}
