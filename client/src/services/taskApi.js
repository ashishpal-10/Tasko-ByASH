import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks/";






export const updateTask = async(id,taskData) =>{
  const response = await axios.put(`${API_URL}${id}`,taskData);

  return response.data;
};

// Auth fxnality

const AUTH_API1 = "http://localhost:5000/api/auth";

export const signupUser = async (userData) => {
  const response = await axios.post(
    `${AUTH_API1}/signup`,
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${AUTH_API1}/login`,
    userData
  );

  return response.data;
};













const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};


export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const deleteTask = async (id) =>{
  const response = await axios.delete(`${API_URL}delete/${id}`);
  console.log(response.data)
  return response.data;
}

// export const getTasks = async () => {
//   const response = await axios.get(
//     API_URL,
//     getAuthHeaders()
//   );

//   return response.data;
// };

// export const createTask = async (taskData) => {
//   const response = await axios.post(
//     API_URL,
//     taskData,
//     getAuthHeaders()
//   );

//   return response.data;
// };

// export const deleteTask = async (id) => {
//   const response = await axios.delete(
//     `${API_URL}/${id}`,
//     getAuthHeaders()
//   );

//   return response.data;
// };