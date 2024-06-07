const Navbar = () => {

    const optionsMenu = [
        {
            id: 1,
            name: 'Home',
            link : '#home',
        },
        {
            id: 2,
            name: 'About',
            link : '#about',
        },
        {
            id: 3,
            name: 'Contact',
            link : '#contact',
        },
        {
            id: 4,
            name: 'Blog',
            link : '#blog',
        },
        {
            id: 5,
            name: 'Careers',
            link : '#careers',
        },
    ]

    return (
        <nav className="flex justify-between items-center py-6 bg-white shadow-md w-full px-32 z-20 fixed top-0 left-0 right-0">
            <img src="/logo.svg" alt="Imagen" />
            <ul className="flex space-x-10">
                {
                    optionsMenu.map(option => (
                        <li key={option.id}><a href={option.link} className="text-Grayish-Blue font-PublicSans hover:text-Dark-Blue">{option.name}</a></li>
                    ))
                }
            </ul>
            <button className="bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-white px-4 py-2 rounded-full font-PublicSans">Request Invite</button>
        </nav>
    )
}

export default Navbar
