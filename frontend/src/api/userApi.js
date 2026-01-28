import axios from "axios";

// 🔥 Render backend URL
const API_URL = "https://bnv-task-backend.onrender.com/api/users";

// GET users (pagination + search)
export const getUsers = (page = 1, limit = 5, search = "") => {
  return axios.get(
    `${API_URL}?page=${page}&limit=${limit}&search=${search}`
  );
};

// GET single user
export const getUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// CREATE user
export const createUser = (data) => {
  return axios.post(API_URL, data);
};

// UPDATE user
export const updateUser = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

// DELETE user
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// EXPORT CSV
export const exportUsersCSV = () => {
  return axios.get(`${API_URL}/export`, {
    responseType: "blob",
  });
};
