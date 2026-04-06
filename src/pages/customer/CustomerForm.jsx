import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";
import AddCustomer from "../../components/Customer/AddCustomer";

const CustomerForm = () => {

    const { id } = useParams();

    const {addCustomer,loading,error} = useCustomer();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const res = await addCustomer(data);
            alert("Customer added successfully");
            reset();
        } catch (err) {
            alert("Failed to add customer");
        }
    }

    return (
        <>
           <AddCustomer onSubmit={onSubmit} />
        </>
    )
}

export default CustomerForm;