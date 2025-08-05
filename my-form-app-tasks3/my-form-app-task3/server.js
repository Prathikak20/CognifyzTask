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
    const { name, email, phone, age, gender } = req.body;

    if (!name || !email) {
        return res.send("Name and Email are required!");
    }
    if (phone && phone.length < 10) {
        return res.send("Phone number must be at least 10 digits.");
    }
    if (age && (age < 0 || age > 120)) {
        return res.send("Please enter a valid age.");
    }

    submissions.push({ name, email, phone, age, gender });
    res.render('success', { name, email, phone, age, gender });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
