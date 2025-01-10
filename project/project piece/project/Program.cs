using Microsoft.EntityFrameworkCore;
using project.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMemoryCache();

builder.Services.AddSession();
// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<BuyContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("BuyContextStr")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();


app.UseRouting();
app.UseSession();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
