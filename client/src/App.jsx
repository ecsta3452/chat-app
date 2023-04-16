import { useEffect } from 'react'
import { io } from 'socket.io-client'

const URL = import.meta.env.VITE_PROD_URL

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
