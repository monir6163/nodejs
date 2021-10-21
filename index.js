const express = require('express');
const cros = require('cors')
const app = express();
app.use(cros())
app.use(express.json())
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello Node my first learning node');
});

const users = [

    {
        "id": 0,
        "name": "Tooth Protection",
        "email": "em@gmail.com"
    },
    {
        "id": 1,
        "name": "Tooth Protection",
        "email": "em@gmail.com"
    },
    {
        "id": 2,
        "name": "Tooth Protection",
        "email": "em@gmail.com"
    },
    {
        "id": 3,
        "name": "Tooth Protection",
        "email": "em@gmail.com"
    },
    {
        "id": 4,
        "name": "Tooth Protection",
        "email": "em@gmail.com"
    },
    {
        "id": 5,
        "name": "Tooth Protection",
        "email": "em@gmail.com"
    },
    {
        "id": 6,
        "name": "Tooth Protection",
        "email": "em@gmail.com"
    }
]
// use query search 
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.title.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(users)
    }
})
// use dynamic id 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

// use post method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})








app.listen(port, () => {
    console.log('Listening to port', port);
})