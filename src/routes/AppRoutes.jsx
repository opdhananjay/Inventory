import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Layout from "../layout/Layout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Setting from "../pages/setting/Setting";

const AppRoutes = () => {
    return(
        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/" element={<Layout/>} >
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/setting" element={<Setting/>} />
            </Route>
        </Routes>
    )
}

export default  AppRoutes;