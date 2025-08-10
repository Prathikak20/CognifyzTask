const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const submissions = [];

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { name, email, password } = req.body;

    // Server-side validation for password strength (example)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
        return res.send("Password must be at least 6 characters, include 1 uppercase letter and 1 number.");
    }
    if (!name || !email) {
        return res.send("Name and Email are required!");
    }

    submissions.push({ name, email, password });
    res.render('success', { name, email });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
