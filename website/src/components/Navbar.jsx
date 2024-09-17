import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='header bg-black'>

        <NavLink to="/" className='w-8 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transition-all ease-in-out duration-500 hover:scale-125'>
            <p className="red-gradient_text">DN</p>
        </NavLink>
        <nav className="flex text-sm gap-7 font-medium px-4">
                <div className="transition ease-in-out duration-700 hover:scale-125">
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-700' : 'text-white' }>
                        About
                    </NavLink>
                </div>
                <div className="transition ease-in-out duration-700 hover:scale-125">
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-red-700' : 'text-white' }>
                        Projects
                    </NavLink>
                </div>
                <div className="transition ease-in-out duration-700 hover:scale-125">
                    <NavLink to="/applications" className={({ isActive }) => isActive ? 'text-red-700' : 'text-white' }>
                        Apps
                    </NavLink>
                </div>
                <div className="transition ease-in-out duration-700 hover:scale-125">
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-700' : 'text-white' }>
                Contact
                </NavLink>
                </div>
        </nav>
        
       
    </header>
  )
}

export default Navbar