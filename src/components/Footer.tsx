
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-16">
        <div className="flex justify-between px-32">

            <div className="flex gap-20">
                <div className="space-y-10">
                    <img src="/logo2.svg" alt="Logo" />
                    <div className="flex gap-5">
                        <img src="/icon-facebook.svg" alt="Logo" />
                        <img src="/icon-facebook.svg" alt="Logo" />
                        <img src="/icon-facebook.svg" alt="Logo" />
                        <img src="/icon-facebook.svg" alt="Logo" />
                    </div>
                </div>
                <ul className="space-y-5">
                    <li><a href="#about" className="text-Grayish-Blue font-PublicSans hover:text-Dark-Blue">About Us</a></li>
                    <li><a href="#about" className="text-Grayish-Blue font-PublicSans hover:text-Dark-Blue">Contact</a></li>
                    <li><a href="#about" className="text-Grayish-Blue font-PublicSans hover:text-Dark-Blue">Blog</a></li>
                </ul>

                <ul className="space-y-5">
                    <li><a href="#about" className="text-Grayish-Blue font-PublicSans hover:text-Dark-Blue">Careers</a></li>
                    <li><a href="#about" className="text-Grayish-Blue font-PublicSans hover:text-Dark-Blue">Support</a></li>
                    <li><a href="#about" className="text-Grayish-Blue font-PublicSans hover:text-Dark-Blue">Privacy Policy</a></li>
                </ul>

            </div>

            <div className="flex flex-col items-end justify-end">
                <button className="bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-white px-8 py-3 rounded-full font-PublicSans self-end mb-4">Request Invite</button>
                <p className="text-sm font-PublicSans font-normal text-Grayish-Blue">© Easybank. All Rights Reserved</p>
            </div>
        </div>

    </footer>
    )
}

export default Footer
