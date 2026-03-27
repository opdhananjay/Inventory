import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const CustomerForm = () => {

    const { id } = useParams();

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) => handleSubmit();

    return (
        <>
            <div className="bg-gray-100 min-h-screen py-10 w-full p-4">

                <div className="bg-white p-6 rounded-xl shadow">
                    
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        Customer Registration
                    </h2>

                    <div className="border-b mb-4"></div>

                    <form className="space-y-4">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700">Customer Name</label>
                                <input type="text" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700">Customer Phone</label>
                                <input type="text" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700">Customer Email</label>
                                <input type="text" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700">Customer Address</label>
                                <input type="text" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                         </div>

                        


                    </form>

                </div>
            </div>
        </>
    )
}

export default CustomerForm;