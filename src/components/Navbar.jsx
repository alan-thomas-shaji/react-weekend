import React from 'react'
import logo from '../assets/logo.png'
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <nav className="bg-transparent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="nav-item text-purple px-4 hover:text-white">
                    <a href="https://github.com/alan-thomas-shaji/react-weekend" target="_blank">
                      <span className='p-2'>
                        <GitHubIcon />
                      </span>  
                       Source Code
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar