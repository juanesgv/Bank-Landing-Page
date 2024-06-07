
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 w-full">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-bold">Easybank</div>
                    <ul className="flex space-x-4 my-4 md:my-0">
                        <li><a href="#about" className="text-gray-400">About Us</a></li>
                        <li><a href="#contact" className="text-gray-400">Contact</a></li>
                        <li><a href="#blog" className="text-gray-400">Blog</a></li>
                        <li><a href="#careers" className="text-gray-400">Careers</a></li>
                    </ul>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full">Request Invite</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
