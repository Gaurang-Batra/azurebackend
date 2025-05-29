// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors({origin:'https://frontend-azure0987-dthjdabte2gkgsgm.canadacentral-01.azurewebsites.net'}));
// app.use(express.json());

// // Demo Cart Data
// const cartData = [
//   { id: 1, name: "Wireless Headphones", quantity: 2 },
//   { id: 3, name: "Bluetooth Speaker", quantity: 1 },
// ];

// // Route: /api/cart
// app.get('/cart', (req, res) => {
//   res.json(cartData);
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT
app.use(cors({origin:'https://frontend-azure0987-dthjdabte2gkgsgm.canadacentral-01.azurewebsites.net'}));
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
