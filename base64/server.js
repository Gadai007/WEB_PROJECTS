const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decrypt(req, res, next){
    
    let data = req.query.code
    
    let newdata = []
    for(let i =0; i < data.length; i++){
        if(data[i] == data[i].toUpperCase()){
            newdata[i] = data[i].toLowerCase()
        }
        else if(data[i] == data[i].toLowerCase()){
            newdata[i] = data[i].toUpperCase()
        }
        else {
            newdata[i] = data[i]
        }
    } 
    req.query.code = newdata.join('')
    
    next()
}

function decodeBase64(req, res, next) {

    let data = req.query.code
    data =  Buffer.from(data, 'base64').toString('ascii')
    req.query.code = data

    console.log(req.query.code)
    next()
}


app.get('/eval',decrypt, decodeBase64, (req, res) => {
   
    res.send('The decoded code is:- ' +  req.query.code)
})

app.listen(4444, () => {

    console.log('server started on http://localhost:4444')
})
