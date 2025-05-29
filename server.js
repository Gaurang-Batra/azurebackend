const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Demo Cart Data
const cartData = [
  { id: 1, name: "Wireless Headphones", quantity: 2 },
  { id: 3, name: "Bluetooth Speaker", quantity: 1 },
];

// Route: /api/cart
app.get('/cart', (req, res) => {
  res.json(cartData);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
