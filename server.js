const express = require("express");
const cors = require("cors"); // You forgot to import cors
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: 'https://frontend-azure0987-dthjdabte2gkgsgm.canadacentral-01.azurewebsites.net'
}));

app.get("/", (req, res) => {
  res.send("Node.js is running on Azure!");
});

app.get("/cart", (req, res) => {
  res.json([
    { id: 1, name: "Wireless Headphones", quantity: 2 },
    { id: 3, name: "Bluetooth Speaker", quantity: 1 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
