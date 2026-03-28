import { useState } from "react";
import { set } from "react-hook-form";
import { addCustomerService } from "../services/customerService";

const useCustomer = () => {

    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const addCustomer = async (data) => {
       
        try {
            setLoading(true);
            setError(null);
            debugger;
            const response = await addCustomerService(data);
            //return response.data;
            return {success:true,message:'Customer added successfully'};
        }
        catch(err){
            setError(err.message || 'An error occurred while adding the customer');
            throw err;
        }
        finally{
            setLoading(false);
        }
    }

    const getCustomers = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getCustomersService();
            return response.data;
        }
        catch(err){
            setError(err.message || 'An error occurred while fetching customers');
        }
        finally{
            setLoading(false);
        }
    }

    return { addCustomer,getCustomers,loading,error };
}

export default useCustomer;