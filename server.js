const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
// express.json allows you to take in req.body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Hot Restaurant!');
});

const dummyArray = [
    {
        table: 1,
        id: 55,
        name: "Alexandra",
        email: "fake@thefakest.com",
        phone: 7041234567,
    },
    {
        table: 2,
        id: 56,
        name: "Alexa",
        email: "faker@thefakest.com",
        phone: 7041234568,
    },
    {
        table: 3,
        id: 57,
        name: "Alex",
        email: "fakest@thefakest.com",
        phone: 7041234569,
    },
];


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});