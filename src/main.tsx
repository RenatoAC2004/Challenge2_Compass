import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const keyClerkAPI = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={keyClerkAPI}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
)
