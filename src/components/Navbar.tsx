import { useState } from 'react'
import '../styles.css'

const Navbar = () => {

    const optionsMenu = [
        {
            id: 1,
            name: 'Home',
            link: '#home',
        },
        {
            id: 2,
            name: 'About',
            link: '#about',
        },
        {
            id: 3,
            name: 'Contact',
            link: '#contact',
        },
        {
            id: 4,
            name: 'Blog',
            link: '#blog',
        },
        {
            id: 5,
            name: 'Careers',
            link: '#careers',
        },
    ]

    const [optionMenu, setOptionMenu] = useState<number>(1)

    const handleClick = (id:number) => {
        setOptionMenu(id)
    }

    return (
        <nav className="flex justify-between items-center bg-white shadow-sm w-full px-8 lg:px-32 z-20 fixed top-0 left-0 right-0 h-24">

            <img src="/logo.svg" alt="Logo" />
            <ul className="hidden md:flex space-x-10 items-center h-full">
                {
                    optionsMenu.map(option => (
                        <li key={option.id} className="h-full flex items-center">
                            <a 
                                href={option.link} 
                                className={`${option.id === optionMenu ? 'border-Lime-Green text-Dark-Blue' : 'text-Grayish-Blue'} h-full flex items-center justify-center  font-PublicSans border-b-2 border-transparent hover:border-Lime-Green hover:text-Dark-Blue transition duration-300 ease-in-out`}
                                onClick={() => handleClick(option.id)}
                            >
                                {option.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <button className="hidden md:block bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-white px-8 py-3 rounded-full font-PublicSans">Request Invite</button>

            <button className="md:hidden focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
            </button>
        </nav>
    )
}

export default Navbar
