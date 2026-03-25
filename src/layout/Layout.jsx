import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { useState } from "react"

const Layout = () => {

    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

    return (
        <div className="layout">
            <Header toggleSidebar={()=>setIsSidebarOpen((prev) => !prev)} />
            <div className="main-layout">
                <Sidebar isOpen={isSidebarOpen} />
                <div className="content">
                    <Outlet/>   
                </div>   
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
