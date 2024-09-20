
import { BrowserRouter as Router } from 
'react-router-dom';


import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
  
  return (
    <main className='bg-black-500'>
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
    </main>
  )
}

export default App