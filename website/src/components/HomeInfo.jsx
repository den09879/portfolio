import { Link } from "react-router-dom";

import click from '../assets/icons/click.svg';
import email from '../assets/icons/email.png';
import user from '../assets/icons/user.png';
import code from '../assets/icons/coding.png';

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <h1 className='sm:text-xs sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-semibold mx-1 text-white'>Dylan</span>
                <br />
                A Software Engineering Student from UNSW.
                <br />
                <br />
                <div class="neo-brutalism-white neo-btn">Next <img className='w-4'src={click} /></div>
            </h1>
            
        );
    }

    if (currentStage === 2) {
        return (
            <h1 className='sm:text-xs sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Some of my interests include front-end 
                <br />
                development, game development and design.
                <br />
                I also enjoy bouldering and playing oztag 🏉
                <br />
                <br />
                <div to="/about" class="neo-brutalism-white neo-btn">Next <img className='w-4'src={click} /></div>
            </h1>
        );
    
    }

    if (currentStage === 3) {
        return (
            <h1 className='sm:text-xs sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Throughout my studies I have learned 
                <br />
                a variety of coding languages 
                <br />
                and software concepts. 
                <br />
                <br />
                <Link to="/about" class="neo-brutalism-white neo-btn">About<img className='w-4'src={user} /></Link>
            </h1>
        );
    
    }

    if (currentStage === 4) {
        return (
            <h1 className='sm:text-xs sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                View through my portfolio to see some of the
                <br />
                notable projects I have developed through the years.
                <br />
                <br />
                <Link to="/projects" class="neo-brutalism-white neo-btn">Projects<img className='w-5'src={code} /></Link>
            </h1>
        );
    

        
    }

    if (currentStage === 5) {
        return (
            <h1 className='sm:text-xs sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                If you're recruiting a developer or need help with 
                <br />
                a project, I would love to get in touch with you!
                <br />
                <br />
                <Link to="/contact" class="neo-brutalism-white neo-btn">Contact<img className='w-5'src={email} /></Link>
            </h1>
        );
    

        
    }
    return null;
}

export default HomeInfo