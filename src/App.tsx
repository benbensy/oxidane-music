import { invoke } from '@tauri-apps/api/core'
import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { TitleBar } from './components/TitleBar'
import { router } from './router'
import { client } from './utils/request'

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }))
  }

  useEffect(() => {
    client.get('/health')
      .then((data: unknown) => {
        console.warn('Response:', data)
      })
      .catch((error: unknown) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div>
      <TitleBar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
