const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
let storedData = [];
// POST MA SHIT
app.post("/api/data", (req, res) => {
  const { message } = req.body;
  if (message === null) {
    return res.status(400).json({ error: "Message required" });
  }
  storedData.push(message);
  res.json({ success: true, saved: message });
});

// GET MA SHIT
app.get("/api/data", (req, res) => {
  res.json({ data: storedData });
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

// UPDATE (by index)
app.put("/api/data/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { message } = req.body;

  if (
    isNaN(index) || index < 0 || index >= storedData.length || !message
  ) {
    return res.status(400).json({ error: "Invalid update" });
  }

  storedData[index] = message;

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});