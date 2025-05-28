import Urls from "../config/urls";
import http from "./http";

export const fetchUsers = async () => {
  const response = await http.get(`${Urls.users}`);
  return response.data;
};

export const createUsers = async () => {
  const response = await http.post(`${Urls.users}`);
  return response.data;
};

export const editUsers = async (id,data) => {
  const response = await http.put(`${Urls.users}/${id}`,data);
  return response.data;
};

export const deleteUsers = async (id,data) => {
  const response = await http.put(`${Urls.users}/${id}`,data);
  return response.data;
};


export const createAdmin = async (data) => {
  const response = await http.post(`${Urls.registeradmin}`,data);
  return response.data;
};