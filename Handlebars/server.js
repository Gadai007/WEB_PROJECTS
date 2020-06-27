const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        name: 'Debayan Debnath',
        isNameEnabled : true
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        about:'I dont know what i am doing'
    })
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        enabled: false,
        author: {
            firstname: 'Debayan',
            lastname: 'Debnath',
            project: {
                name: 'Social media'
            }
        }
    })
})

app.get('/look', (req, res) => {
    res.render('lookup', {
        user: {
            username: 'Debayan Debnath',
            phone: '1234',
            age: 20
        },

        people : [
            'jack',
            'john',
            'mary'
        ]
    })
})

app.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})