import axios from "axios";

const API_URL = "http://training.pixbit.in/api/";

const register = (name, email, password) => {
 let password_confirmation= password
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
    password_confirmation,
  });
};

const login = async (email, password) => {
  const response = await axios
    .post(API_URL + "login", {
      email,
      password,
    });
    console.log('evide vannu...');
  if (response.data) {
    console.log('data storing local');
    localStorage.setItem("user", JSON.stringify(response.data.data));
    console.log(response.data);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
  console.log('logout');
};

export default {
  register,
  login,
  logout,
};
