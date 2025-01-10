namespace online_corse.Models
{
    public class Student
    {
        public int StudentId { set; get; }
        public string Name { set; get; }
        public double Average { set; get; }
        public string Password { set; get; }
        public int CorseId { set; get; }
        public Corse Corse { set; get; }
    }
}
