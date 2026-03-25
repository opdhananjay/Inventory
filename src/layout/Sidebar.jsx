import { Children } from "react";
import { Link } from "react-router-dom";

const menus = [
    {
        name:"Dashaboard",
        path:"/dashboard"
    },
    {
        name:'customers',
        children:[
            {name:'Customer List',path:'/customers'},
            {name:'Add Customer',path:'/customers/new'}
        ]
    }
]


const Sidebar = ({isOpen}) => {
    return (
        <div className={`bg-white shadow-lg min-h-full P-4 ${isOpen ? 'w-64':'w-0 overflow-hidden'}`}>
            <h2 className="text-xl font-bold mb-6">My App</h2>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
            {menus.map((item, index) => (
                <div key={index}>
                <p className="font-semibold">{item.name}</p>

                    {item.children && (
                        <div className="ml-4 flex flex-col">
                        {item.children.map((sub, i) => (
                            <Link key={i} to={sub.path}>
                            {sub.name}
                            </Link>
                        ))}
                        </div>
                    )}
                    </div>
                ))}
            </nav>
            
        </div>
    )
}

export default Sidebar;