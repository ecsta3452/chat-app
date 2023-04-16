import { useEffect } from 'react'
import { io } from 'socket.io-client'

const URL = 'http://localhost:5000'

export const socket = io(URL)

function App() {
  useEffect(() => {
    socket.on('connected', (io) => {
      console.log('user connected')
    })
  })

  return <div>app</div>
}

export default App
