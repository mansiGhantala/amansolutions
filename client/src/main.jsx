// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import { AuthProvider } from "./store/auth.jsx";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDom.createRoot(document.getElementById("root")).
render(
  <AuthProvider>  
  <React.StrictMode>
    <App/>
  <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
bodyClassName="toastBody"

/>

  </React.StrictMode>
  </AuthProvider>
);