import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='purple-dark text-foreground min-h-screen bg-gradient-custom'>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)