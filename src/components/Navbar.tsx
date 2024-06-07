const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-6 bg-white shadow-md w-full px-32 z-20 fixed top-0 left-0 right-0">
            <div className="text-2xl font-bold">Easybank</div>
            <ul className="flex space-x-4">
                <li><a href="#home" className="text-gray-600">Home</a></li>
                <li><a href="#about" className="text-gray-600">About</a></li>
                <li><a href="#contact" className="text-gray-600">Contact</a></li>
                <li><a href="#blog" className="text-gray-600">Blog</a></li>
                <li><a href="#careers" className="text-gray-600">Careers</a></li>
            </ul>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full">Request Invite</button>
        </nav>
    )
}

export default Navbar
