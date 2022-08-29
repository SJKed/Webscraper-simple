const express = require('express')
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
}) 

app.listen(8080, () => {
    console.log('listening on port 8080')
})