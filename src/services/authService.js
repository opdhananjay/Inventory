import axiosInstance from "./apiClient"

export const loginService = async (data) => {
    const response = await axiosInstance.post('/login',data);
    return response.data;
}




