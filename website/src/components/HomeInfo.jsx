import { Link } from "react-router-dom";

import click from '../assets/icons/click.svg';
import email from '../assets/icons/email.png';
import user from '../assets/icons/user.png';
import code from '../assets/icons/coding.png';
import close from '../assets/icons/arrow-right-svgrepo-com.svg';
const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-semibold mx-1 text-white'>Dylan</span>
                <br />
                A Software Engineering Student from Sydney.
                <br />
                <br />
                <div className="neo-brutalism-white neo-btn">Next <img className='w-4'src={click} /></div>
            </h1>
            
        );
    }

    if (currentStage === 2) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Learn about me and the experience I
                <br />
                have developed during my studies.
                <br />
                <br />
                <Link to="/about" className="neo-brutalism-white neo-btn">About<img className='w-4'src={user} /></Link>
            </h1>
        );
    
    }

    if (currentStage === 3) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                View through my portfolio to see some of my notable
                <br />
                projects developed through the years.
                <br />
                <br />
                <Link to="/projects" className="neo-brutalism-white neo-btn">Projects<img className='w-5'src={code} /></Link>
            </h1>
        );
    

        
    }

    if (currentStage === 4) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                If you're recruiting a developer or need help with 
                <br />
                a project, I would love to get in touch with you!
                <br />
                <br />
                <Link to="/contact" className="neo-brutalism-white neo-btn">Contact<img className='w-5'src={email} /></Link>
            </h1>
        );  
    }

    if (currentStage === 5) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                This room is an interactive environment so
                <br />
                feel free to look for cool little details!
                <br />
                <br />
                <div to="/about" className="neo-brutalism-white neo-btn">Close <img className='w-4'src={close} /></div>
            </h1>
        );
    

        
    }
    return null;
}

export default HomeInfo