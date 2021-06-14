const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
// express.json allows you to take in req.body
app.use(express.json());

const tables = [
    {
        id: "AH768",
        name: "Alice Springs",
        email: "test@test.com",
        phoneNumber: "704-123-4567",
    },
    {
        id: "DT518",
        name: "Derrick Thomas",
        email: "test1@test.com",
        phoneNumber: "704-765-4321",
    }
];

const waitlist = [
    {
        id: "OK518",
        name: "Olivia Kirk",
        email: "test1@test.com",
        phoneNumber: "704-951-7538",
    }
];

// route to home html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

// route to tables html
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// route to reservations html
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// api data
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitlist));

/* Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, 
checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. 
Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor 
has a reservation (or is on the waiting list). */

app.post('/api/tables', (req, res) => {
    const newTable = req.body;
    
    if(tables.length <= 5) {
        tables.push(newTable);
        res.json(true);
    } else {
        waitlist.push(newTable);
        res.json(false);
    }
});



app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});