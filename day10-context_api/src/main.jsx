
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestComponent from './TestComponent.jsx'
import { ContextProvider } from './context/MyContext.jsx'
import { MyShopContextProvider } from './context/MyShop.jsx'

createRoot(document.getElementById('root')).render(

    <MyShopContextProvider>
        <App />
    </MyShopContextProvider>
)
