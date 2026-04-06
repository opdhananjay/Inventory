const AddCustomer = ({onSubmit}) => {

     const {register,handleSubmit,formState:{errors,isValid},reset} = useForm();

     return (
        <>
            <div className="bg-gray-100 min-h-screen py-5 w-full p-4">

                <div className="bg-white p-6 rounded-xl shadow">
                    
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        Customer Registration
                    </h2>

                    <div className="border-b mb-4"></div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700"> Name</label>

                                <div className="flex-1 flex flex-col">

                                    <input {...register("name",
                                        {
                                            required:'Name is required',
                                            minLength:{value:3,message:'Name must be at least 3 characters'},
                                            maxLength:{value:50,message:'Name must be less than 50 characters'}
                                        }
                                     )} 
                                    name="name" type="text" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

                                </div>

                                
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700"> Phone</label>

                                 <div className="flex-1 flex flex-col">
                                     <input {...register('phone',
                                        {
                                            required:'Phone is required',
                                            maxLength:{value:10,message:'Phone number must be 10 digits'},
                                            minLength:{value:10,message:'Phone number must be 10 digits'},
                                            pattern:{value:/^\d{10}$/,message:'Phone number must be 10 digits'}
                                        }
                                        )}
                                        name="phone" type="text" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                 </div>
                                
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700"> Email</label>

                                <div className="flex-1 flex flex-col">
                                    
                                    <input {...register('email',
                                      {
                                        required:false,
                                        maxLength:{value:50,message:'Email must be less than 50 characters'},
                                        pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:'Invalid email address'}
                                      }
                                    )} 
                                    name="email" type="email" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                                </div>
                                
                            </div>

                         </div>

                        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                                <label className="md-w-40 text-sm font-medium text-gray-700"> Addr.</label>

                                <div className="flex-1 flex flex-col">
                                    
                                    <textarea {...register('address',
                                            {
                                                maxLength:{value:100,message:'address must be less than 100 character'}
                                            }
                                        )}
                                     name="address" className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none max-h-32"></textarea>
                                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                                    
                                </div>
                                
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-green-800 rounded-md px-4 py-2 text-white text-sm cursor-pointer" >Register</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
     )

}

export default AddCustomer;