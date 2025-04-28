import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss";
import { IsMobileProvider } from './utilies/isMobile.jsx';

createRoot(document.getElementById('root')).render(
 <IsMobileProvider>
     <App />
 </IsMobileProvider>
)
