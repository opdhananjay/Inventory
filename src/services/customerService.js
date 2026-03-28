import axiosInstance from "./apiClient"

export const addCustomerService = (data) => {
    return axiosInstance.post('/addcustomer',data);
}

export const getCustomersService = () => {
    return axiosInstance.get('/customers');
}

