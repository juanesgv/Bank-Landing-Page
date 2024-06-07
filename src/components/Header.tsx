
const Header = () => {
    return (
        <header className="flex justify-between items-center px-32 w-full h-[750px] border-b border-gray-300">
            {/* Columna izquierda */}
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">Next generation digital banking</h1>
                <p className="text-lg mb-6">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full">Request Invite</button>
            </div>
            {/* Columna derecha (imagen JPEG con fondo SVG) */}
            <div className="flex-shrink-0 relative" style={{ width: '900px', height: '900px',  right: '-325px', top: '50px' }}>
                <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg-intro-desktop.svg)', backgroundSize: 'contain' }}>
                    <img src="/image-mockups.png" alt="Imagen" className="absolute inset-0 w-full h-full object-contain" style={{ objectFit: 'contain' }} />
                </div>
            </div>
        </header>
    )
}

export default Header
