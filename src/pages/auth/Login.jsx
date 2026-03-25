import { useState } from "react";
import { loginService } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {

   const navigate = useNavigate();
   const { login,logout,loading } = useAuth();
   const [formData,setFormData] = useState({
        email:'',
        password:''
   });
   
   const handleChange = (e) => {
       const { name,value } = e.target;
       setFormData((prev)=>({
        ...prev,
        [name]:value
       }))
   }

   const handleLogin = (e) => {
      
      e.preventDefault();

      if(!handleValidation()) return false;

      console.log('formdata',formData);

      // API CALL | 
      // const data = login(formData);
      if(true){
        navigate('/dashboard');
      }

      setFormData({
        email:'',
        password:''
     });

   }

   const handleValidation = () => {

        if(!formData.email.trim()){
            return false;
        }

        if(!formData.password.trim()){
            return false;
        }

        return true;
   }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen px-3 bg-gray-100">

                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">

                        <h2 className="text-center font-medium text-gray-500">Login</h2>

                        <div>
                            <input type="text" placeholder="Enter your email" name="email"
                            className="w-full px-2 py-2 rounded-md outline-none border"
                            value={formData.email} onChange={handleChange} />    
                        </div>
                        
                        <div>
                            <input type="password" placeholder="Enter your password" name="password"
                            className="w-full px-2 py-2 rounded-md outline-none border" 
                            value={formData.password} onChange={handleChange} />
                        </div>
                        
                        <button className="bg-green-600 text-white py-2 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-blue-600 cursor-pointer transition">
                            Submit 
                        </button>

                    </form>

                </div>

            </div>      
        </>
    )
}

export default Login