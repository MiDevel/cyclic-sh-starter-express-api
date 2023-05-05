const express = require('express')
const app = express()


// add a route to test if the server is running
app.get('/test', (req, res) => {
    console.log("/test request!")
    res.send('The server is up and running!')
})

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.listen(process.env.PORT || 3000)
