import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { Server } from 'socket.io'
import http from 'http'

const PORT = 5000

const app = express()

const httpServer = http.createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

app.use(cors({ origin: '*' }))
app.use(morgan('dev'))

io.on('connection', (socket) => {
  console.log('connected')
})

httpServer.listen(PORT, () => {
  console.log('server listen on ', PORT)
})
