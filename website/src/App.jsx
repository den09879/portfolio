
import { BrowserRouter as Router } from 
'react-router-dom';


import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
const App = () => {
  
  return (
    <main className='bg-black-500 h-[100vh]'>
        <Router>
            <Navbar />
            <AnimatedRoutes />
            
        </Router>
    </main>
    
  )
}

export default App