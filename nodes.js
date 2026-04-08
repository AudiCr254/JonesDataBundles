const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const CUSTOMER_KEY = process.env.CUSTOMER_KEY || 'LUC6JkfBJ3MhcT8EILtu1nK4gjZyZtPWnEk22LS9gm9C8wVO';
const CUSTOMER_SECRET = process.env.CUSTOMER_SECRET || 'CqXdKeiPwRAmc4VyNZi0AqIGtbO7r0qVgHVhwIxIq8RVJZOYxBbwb4JGcPHc8IbY';


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('JonesDataBundles API is running!');
});

// Placeholder for payment API routes
app.post('/api/payment', (req, res) => {
  // Implement payment processing logic here
  // For demonstration, we'll just log the keys and the request body
  console.log('Customer Key:', CUSTOMER_KEY);
  console.log('Customer Secret:', CUSTOMER_SECRET);

  console.log('Payment request received:', req.body);
  res.status(200).json({ 
    status: 'success',
    message: 'Demo Payment Processed Successfully', 
    transactionId: 'DEMO-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    timestamp: new Date().toISOString(),
    data: req.body 
  });
});

// Placeholder for other API routes
app.get('/api/data', (req, res) => {
  // Implement data retrieval logic here
  res.status(200).json({ 
    status: 'success',
    message: 'Trial Data Retrieved', 
    data: [
      { id: 1, type: 'SME', volume: '1GB', price: 'KES 250' },
      { id: 2, type: 'Gifting', volume: '5GB', price: 'KES 1000' },
      { id: 3, type: 'Corporate', volume: '10GB', price: 'KES 1800' }
    ] 
  });
});

app.listen(port, () => {
  console.log(`JonesDataBundles API listening at http://localhost:${port}`);
});
