const server = require('./src/server')

const port = process.env.PORT || 5000

const startServer = () => {
    server.listen(port, () => {
        console.log(`Up and Running in Port ${port}`)
    })
}

startServer()