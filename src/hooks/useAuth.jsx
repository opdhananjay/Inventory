import { useState } from "react";
import { loginService } from "../services/authService";

const useAuth = () => {
    
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const login = async (data) => {
        try{
            setLoading(true);
            const res = await loginService(data);
            return true;
        }
        catch(err){
            setError(err);
            throw err;
        }
        finally{
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.setItem('isLogin',false);
    }

    return { login,logout,loading };
}

export default useAuth;