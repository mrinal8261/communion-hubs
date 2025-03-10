const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "communion_hub",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

// Fetch all events
app.get("/events", (req, res) => {
    db.query("SELECT * FROM events", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new event
app.post("/events", (req, res) => {
    const { title, date, location, description, category } = req.body;
    db.query(
        "INSERT INTO events (title, date, location, description, category) VALUES (?, ?, ?, ?, ?)",
        [title, date, location, description, category],
        (err) => {
            if (err) throw err;
            res.send("Event added successfully");
        }
    );
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
