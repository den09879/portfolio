import { Link } from "react-router-dom";

import click from '../assets/icons/click.svg';
import email from '../assets/icons/email.png';
import user from '../assets/icons/user.png';
import code from '../assets/icons/coding.png';
import close from '../assets/icons/arrow-right-svgrepo-com.svg';

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5 font-medium'>
                Hi, I'm
                <span className='font-bold mx-1 text-black'>Dylan</span>
                <br />
                a software engineering student.
                <br />
                <br />
                <div className="neo-brutalism-white neo-btn">Next <img className='w-4'src={click} /></div>
            </h1>
            
        );
    }

    if (currentStage === 2) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5 font-medium'>
                Learn about me and some of the 
                <br />
                skills I have developed.
                <br />
                <br />
                <Link to="/about" className="neo-brutalism-white neo-btn">About<img className='w-4'src={user} /></Link>
            </h1>
        );
    
    }

    if (currentStage === 3) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5 font-medium'>
                View my portfolio to see some of my
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
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5 font-medium'>
                If you're recruiting a developer 
                <br />
                or need help with a project, I
                <br />
                would love to get in touch!
                <br />
                <br />
                <Link to="/contact" className="neo-brutalism-white neo-btn">Contact<img className='w-5'src={email} /></Link>
            </h1>
        );  
    }

    if (currentStage === 5) {
        return (
            <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5 font-medium'>
                You can control the camera in this 
                <br />
                room so feel free to look
                <br />
                for cool little details!
                <br />
                <br />
                <div to="/about" className="neo-brutalism-white neo-btn">Close <img className='w-4'src={close} /></div>
            </h1>
        );
    

        
    }
    return null;
}

export default HomeInfo