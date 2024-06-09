
const Header = () => {
    return (
        <header className="relative flex flex-col-reverse pl-0 md:grid  md:grid-cols-12 md:pl-16 lg:pl-32 max-w-full h-[750px]">
            
            <div className="col-span-5 px-8 md:px-0 flex flex-col justify-center z-10">
                <h1 className="text-6xl font-PublicSans font-normal mb-4 text-Dark-Blue">Next generation digital banking</h1>
                <p className="text-lg mb-6 font-PublicSans font-normal text-Grayish-Blue">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-white px-8 py-3 rounded-full font-PublicSans self-start hover:opacity-65">Request Invite</button>
            </div>

            <div className="col-span-7 relative">
                <div className="hidden md:block absolute top-0 right-0 bottom-0 -left-32 bg-center bg-no-repeat bg-header">
                    <img src="/image-mockups.png" alt="Imagen" className="inset-0 w-full h-full object-contain mockup-img"/>
                </div>
                <div className="md:hidden flex justify-center bg-header">
                    <img src="/image-mockups.png" alt="Imagen" className="inset-0  w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] object-contain"/>
                </div>
            </div>

        </header>
    )
}

export default Header
