using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace project.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Pieces",
                columns: table => new
                {
                    PieceID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PieceName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pieceprice = table.Column<float>(type: "real", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pieces", x => x.PieceID);
                    table.ForeignKey(
                        name: "FK_Pieces_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Password", "UserEmail", "UserName" },
                values: new object[,]
                {
                    { 1, "ahmad123", "ahmad@gmail.com", "ahmad" },
                    { 2, "omar123", "omar@gmail.com", "omar" },
                    { 3, "Mohammad123", "Mohammad@gmail.com", "Mohammad" },
                    { 4, "0000", "jewellary@gmail.com", "jewellary" }
                });

            migrationBuilder.InsertData(
                table: "Pieces",
                columns: new[] { "PieceID", "PieceName", "Pieceprice", "UserId" },
                values: new object[,]
                {
                    { 100, "Necklace Pendant and Earrings", 150f, 1 },
                    { 101, "Silver Bracelet", 120f, 2 },
                    { 102, "Gold Ring with Diamonds", 100f, 3 },
                    { 103, "Pendant Necklace and Earrings", 180f, 3 },
                    { 104, "Silver and Gold Necklace", 140f, 3 },
                    { 105, "Floral Ring with Diamonds", 180f, 2 },
                    { 106, "Silver Bracelet", 150f, 2 },
                    { 107, "Silver Ring with Diamonds", 100f, 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pieces_UserId",
                table: "Pieces",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pieces");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
