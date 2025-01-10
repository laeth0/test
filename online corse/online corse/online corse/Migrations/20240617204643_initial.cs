using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace online_corse.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Corses",
                columns: table => new
                {
                    CorseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CorseName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CosrePrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Corses", x => x.CorseId);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Average = table.Column<double>(type: "float", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CorseId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.StudentId);
                    table.ForeignKey(
                        name: "FK_Students_Corses_CorseId",
                        column: x => x.CorseId,
                        principalTable: "Corses",
                        principalColumn: "CorseId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Corses",
                columns: new[] { "CorseId", "CorseName", "CosrePrice" },
                values: new object[,]
                {
                    { 1, "C++", 150 },
                    { 2, "V&V", 60 },
                    { 3, "Math", 80 },
                    { 4, "Web Programming", 300 },
                    { 5, "Embeded System", 190 },
                    { 6, "Java", 160 },
                    { 7, "English", 90 },
                    { 8, "Arabic", 90 },
                    { 9, "Python", 130 },
                    { 10, "Project Managment", 110 }
                });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "StudentId", "Average", "CorseId", "Name", "Password" },
                values: new object[,]
                {
                    { 1, 92.0, 1, "Ahmad", "123" },
                    { 2, 99.0, 1, "Aya", "212" },
                    { 3, 97.0, 6, "Hala", "262" },
                    { 4, 89.0, 4, "Saba", "762" },
                    { 5, 97.0, 7, "Rawan", "292" },
                    { 6, 74.0, 2, "Noor", "202" },
                    { 7, 97.0, 3, "Raghad", "202" },
                    { 8, 67.0, 3, "Zaid", "162" },
                    { 9, 88.0, 3, "Mohammed", "200" },
                    { 10, 57.0, 2, "Tawfiq", "772" },
                    { 11, 91.0, 2, "Suha", "779" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Students_CorseId",
                table: "Students",
                column: "CorseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Corses");
        }
    }
}
