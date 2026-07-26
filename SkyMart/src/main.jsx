import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './route/AppRoutes.jsx'
import { CntxtContextProvider } from './context/Context.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
<CntxtContextProvider>
    <AppRoutes />
    <ToastContainer />
</CntxtContextProvider>
    
)
