import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "your_mysql_user",
  password: "your_mysql_password",
  database: "adoption_db"
});

db.connect(err => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("MySQL Connected...");
});

app.post("/apply", (req, res) => {
  const { name, email, reason } = req.body;
  const sql = "INSERT INTO applications (name, email, reason) VALUES (?, ?, ?)";
  db.query(sql, [name, email, reason], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Application saved!", id: result.insertId });
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
