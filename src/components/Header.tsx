
const Header = () => {
    return (
        <header className="grid grid-cols-12 pl-32 max-w-full h-[750px]">
            {/* Columna izquierda */}
            <div className="col-span-5 flex flex-col justify-center">
                <h1 className="text-6xl font-PublicSans font-normal mb-4 text-Dark-Blue">Next generation digital banking</h1>
                <p className="text-lg mb-6 font-PublicSans font-normal text-Grayish-Blue">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-white px-4 py-2 rounded-full font-PublicSans self-start">Request Invite</button>

            </div>
            {/* Columna derecha (imagen JPEG con fondo SVG) */}
            <div className="col-span-7 relative">
                <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg-intro-desktop.svg)', backgroundSize: '1000px 1000px', backgroundPosition: '300px -145px' }}>
                    <img src="/image-mockups.png" alt="Imagen" className="absolute inset-0 w-full h-full object-contain" style={{ objectFit: 'scale-down', objectPosition: '520px 100px'}} />
                </div>
            </div>
        </header>
    )
}

export default Header
