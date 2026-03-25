const Header = ({ toggleSidebar }) => {
    return (
        <>
           <header className="flex items-center justify-between bg-white shadow px-4 py-3">
                
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <button onClick={toggleSidebar} className="text-xl font-bold px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
                        ☰
                    </button>
                    <h1 className="text-lg font-semibold">
                        I. Management
                    </h1>
                </div>

                {/* Middle Section */}
                <div>
                    
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                      {/* Notifications */}
                      <button className="relative">
                        🔔
                        <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">3</span>
                      </button>
                      {/* User */}
                      <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <span className="hidden md:block text-sm">
                                Admin
                            </span>
                      </div>
                </div>

           </header>
        </>
    )
}

export default Header