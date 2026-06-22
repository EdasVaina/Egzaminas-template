const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
let storedData = [];
let storedUser = [];
// POST MA SHIT
app.post("/api/data", (req, res) => {
  const { title, desc } = req.body;
  if (title === null) {
    return res.status(400).json({ error: "Message required" });
  }
  storedData.push(title);
  storedData.push(desc);
  console.log('posted')
  res.json({ success: true, saved: title });
  res.json({ success: true, saved: desc });
});

app.post("/api/login", (req, res) => {
  const { Username, Password } = req.body;
  if (Username === null) {
    return res.status(400).json({ error: "Message required" });
  }
  storedUser.push(Username);
  storedUser.push(Password);
  console.log('posted')
  res.json({ success: true, saved: Username });
  res.json({ success: true, saved: Password });
});

// GET MA SHIT
app.get("/api/data", (req, res) => {
  res.json({ data: storedData });
});
app.get("/api/login", (req, res) => {
  res.json({ data: storedUser });
});

// DELETE ma shit
app.delete("/api/data/:index", (req, res) => {
  const index = parseInt(req.params.index);
  // check if number, obvious, index not bigger than array 
  if (isNaN(index) || index < 0 || index >= storedData.length) {
    return res.status(400).json({ error: "Invalid index" });
  }
  // delete by index, number of items
  storedData.splice(index, 1);
  res.json({ success: true });
});
app.delete("/api/login/:index", (req, res) => {
  const index = parseInt(req.params.index);
  // check if number, obvious, index not bigger than array 
  if (isNaN(index) || index < 0 || index >= storedData.length) {
    return res.status(400).json({ error: "Invalid index" });
  }
  // delete by index, number of items
  storedData.splice(index, 1);
  res.json({ success: true });
});

// UPDATE (by index)
app.put("/api/data/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { title } = req.body;

  if (
    isNaN(index) || index < 0 || index >= storedData.length || !title
  ) {
    return res.status(400).json({ error: "Invalid update" });
  }

  storedData[index] = title;

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});