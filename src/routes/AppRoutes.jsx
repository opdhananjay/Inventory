import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Layout from "../layout/Layout";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Login />} />
            </Route>
        </Routes>
    )
}

export default  AppRoutes;