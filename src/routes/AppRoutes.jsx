import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Layout from "../layout/Layout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Setting from "../pages/setting/Setting";
import CustomerList from "../pages/customer/CustomerList";
import CustomerForm from "../pages/customer/CustomerForm";

const AppRoutes = () => {
    return(
        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/" element={<Layout/>} >
                <Route path="/dashboard" element={<DashboardPage/>} />

                {/* Customer */}
                
                <Route path="/customers" element={<CustomerList/>} />
                <Route path="/customers/new" element={<CustomerForm/>} />
                <Route path="/customers/:id" element={<CustomerForm/>} />

                

                <Route path="/setting" element={<Setting/>} />
            </Route>
        </Routes>
    )
}

export default  AppRoutes;