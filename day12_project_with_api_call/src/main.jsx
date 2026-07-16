import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyStore, MyStoreContextProvider } from './MyContext/MyStore.jsx'

createRoot(document.getElementById('root')).render(
   <MyStoreContextProvider>
     <App />
   </MyStoreContextProvider>
)
