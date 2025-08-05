const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files from 'public' folder
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route for form page
app.get('/', (req, res) => {
    res.render('submit');  // Note: The form file is Submit.ejs (case sensitive)
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.render('success', { name, email });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
