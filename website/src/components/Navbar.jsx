import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <div className="bg-white opacity-80 absolute top-0 w-full h-20 z-10" />
        <header className='header'>
            <NavLink to="/" className='w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md transition-all ease-in-out duration-500 hover:scale-125'>
                <p className="red-gradient_text">DN</p>
            </NavLink>
            <nav className="flex text-md gap-7 font-medium ">
                    <div className="transition ease-in-out duration-700 hover:scale-125">
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-400' : 'text-black' }>
                            About
                        </NavLink>
                    </div>
                    <div className="transition ease-in-out duration-700 hover:scale-125">
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-green-400' : 'text-black' }>
                            Projects
                        </NavLink>
                    </div>
                    <div className="transition ease-in-out duration-700 hover:scale-125">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-400' : 'text-black' }>
                    Contact
                    </NavLink>
                    </div>
            </nav>
        </header>
        
    </>
    
  )
}

export default Navbar