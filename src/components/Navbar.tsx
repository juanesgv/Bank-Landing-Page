import { useState } from 'react'
import '../styles.css'
import { optionsMenu } from '../data/optionsMenu'
import ModalMenu from './ModalMenu'

const Navbar = () => {


    const [optionMenu, setOptionMenu] = useState<number>(1)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = (id: number) => {
        setOptionMenu(id)
    }

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className="flex justify-between items-center bg-white shadow-sm w-full px-8 lg:px-32 z-50 fixed top-0 left-0 right-0 h-24 ">

                <img src="/logo.svg" alt="Logo" />
                <ul className="hidden md:flex space-x-10 items-center h-full">
                    {
                        optionsMenu.map(option => (
                            <li key={option.id} className="h-full flex items-center">
                                <a
                                    href={option.link}
                                    className={`${option.id === optionMenu ? 'border-b-2 border-Lime-Green text-Dark-Blue' : 'text-Grayish-Blue'} h-full flex items-center justify-center font-PublicSans hover:border-b-2  hover:border-Lime-Green hover:text-Dark-Blue transition duration-300 ease-in-out`}
                                    onClick={() => handleClick(option.id)}
                                >
                                    {option.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <button className="hidden md:block bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-white px-8 py-3 rounded-full font-PublicSans">Request Invite</button>

                <button className="md:hidden focus:outline-none" onClick={handleMenu}>
                    {isMenuOpen?
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>
                            :    
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" /></g></svg>
                    }
                </button>
            </nav>

            <ModalMenu
                isOpen={isMenuOpen}
                onClose={handleMenu}
                optionsMenu={optionsMenu}
                optionSelected={optionMenu}
                handleClick={handleClick}
            />
        </>

    )
}

export default Navbar
