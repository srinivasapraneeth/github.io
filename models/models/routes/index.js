// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Initialize Express App
const app = express();
app.use(bodyParser.json());

// Use the routes
app.use('/api', userRoutes);

// Sync models with the database
sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

