namespace project.Models
{
    public class Piece
    {
        public int PieceID { get; set; }
        public string PieceName { get; set; }
        public float Pieceprice { get; set; }
        public int UserId { get; set; }
        public user user { get; set; }

    }
}
