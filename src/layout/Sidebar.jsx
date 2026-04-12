import { ChevronDown, ChevronUp } from "lucide-react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";

export const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    roles: ["Admin", "Staff", "Technician"]
  },

  {
    name: "Customers",
    roles: ["Admin", "Staff"],
    children: [
      { name: "Customer List", path: "/customers" },
      { name: "Add Customer", path: "/customers/new" }
    ]
  },

  {
    name: "Repairs",
    roles: ["Admin", "Staff", "Technician"],
    children: [
      { name: "Repair List", path: "/repairs" },
      { name: "Create Repair", path: "/repairs/new" },
      { name: "Pending Repairs", path: "/repairs/pending" },
      { name: "Completed Repairs", path: "/repairs/completed" }
    ]
  },

  {
    name: "Inventory",
    roles: ["Admin", "Staff"],
    children: [
      { name: "Parts List", path: "/inventory" },
      { name: "Add Part", path: "/inventory/new" },
      { name: "Stock In", path: "/inventory/stock-in" },
      { name: "Stock Out", path: "/inventory/stock-out" },
      { name: "Low Stock", path: "/inventory/low-stock" }
    ]
  },

  {
    name: "Suppliers",
    roles: ["Admin", "Staff"],
    children: [
      { name: "Supplier List", path: "/suppliers" },
      { name: "Add Supplier", path: "/suppliers/new" }
    ]
  },

  {
    name: "Billing",
    roles: ["Admin", "Staff"],
    children: [
      { name: "Create Invoice", path: "/billing/new" },
      { name: "Invoice List", path: "/billing" },
      { name: "Payment History", path: "/billing/payments" }
    ]
  },

  {
    name: "Reports",
    roles: ["Admin"],
    children: [
      { name: "Sales Report", path: "/reports/sales" },
      { name: "Repair Report", path: "/reports/repairs" },
      { name: "Inventory Report", path: "/reports/inventory" },
      { name: "Technician Performance", path: "/reports/technicians" }
    ]
  },

  {
    name: "Users",
    roles: ["Admin"],
    children: [
      { name: "User List", path: "/users" },
      { name: "Add User", path: "/users/new" },
      { name: "Roles", path: "/users/roles" }
    ]
  },

  {
    name: "Settings",
    roles: ["Admin"],
    children: [
      { name: "Shop Settings", path: "/settings/shop" },
      { name: "Tax Settings", path: "/settings/tax" },
      { name: "System Settings", path: "/settings/system" }
    ]
  }
];

const Sidebar = ({isOpen}) => {
  
    const [openMenu,setOpenMenu] = useState(null);

    return (
       <div
          className={`fixed top-17 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        > 
            <nav className="flex flex-col gap-2">
                {
                    menus.map((item,index) => (
                        
                        <div key={index}>
                            
                            {!item.children ? (
                                <Link className="block p-2 hover:bg-gray-200 rouded" to={item.path}>
                                    {item.name}
                                </Link>
                                ):(
                                    <>
                                        {/* Parent Menu */}

                                        <div className="cursor-pointer p-2 hover:bg-gray-200 rounded flex justify-between" onClick={()=>{setOpenMenu(openMenu == index ? null : index)}}>
                                            {item.name}
                                            <span>{openMenu == index ? <ChevronUp/> :  <ChevronDown /> }</span>
                                        </div>

                                        {/* Submenu */}

                                        {openMenu == index &&
                                            <ul className="ml-4 mt-1 flex flex-col gap-1">
                                                {
                                                    item.children.map((sub,i)=>(
                                                        <li key={i}>
                                                            <Link className="block p-2 text-sm hover:bg-gray-200 rounded" to={sub.path}>
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </>
                                )
                            }
                        </div>
                    ))
                }
            </nav>
        </div>
    )

}

export default Sidebar;


