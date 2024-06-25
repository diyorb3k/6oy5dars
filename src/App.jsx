import React from 'react'
import Tudulist from './components/Tudulist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Tudulist />
      <ToastContainer/>
      
    </div>
  )
}

export default App