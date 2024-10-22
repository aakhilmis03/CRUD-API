const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const usersRoute = require('./routes/users');

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/crudDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));

app.use('/users', usersRoute);
// Basic route for home
app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
