import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://training.pixbit.in/api/";



const getAllDesignations= () => {
  return axios.get(API_URL + "designations", { headers: authHeader() });
};
const getAllEmployees= () => {
  return axios.get(API_URL + "employees", { headers: authHeader() });
};


export default {

  getAllDesignations,
  getAllEmployees
};




// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };