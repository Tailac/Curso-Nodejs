
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(3000, ()=> {
    console.log('App listening on port 3000')
})

app.get('/about', (require,response) =>{
    response.sendFile(path.resolve(__dirname, 'about.html'))
})
app.get('/contact', (require,response) =>{
    response.sendFile(path.resolve(__dirname, 'contact.html'))
})
app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

/*
app.get('/about', (require,response) =>{
    response.send({
        name: 'Leticia Saviani'
    })
})

app.get('/', (require,response) =>{
    response.json({
        name: 'Taila Saviani'
    })
})*/

/* const http = require('http')
const fs = require('fs')

const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const HomePage = fs.readFileSync('index.html')

const server = http.createServer((request, response) => {
    
    if(request.url === '/about'){
        return response.end(aboutPage)
    }else if(request.url === '/contact'){
        return response.end(contactPage)
    }else if(request.url === '/'){
        return response.end(HomePage)
    }else{
        response.writeHead(404)
        response.end('THE PAGE WAS NOT FOUND')
    }
    

})

server.listen(3000)

*/