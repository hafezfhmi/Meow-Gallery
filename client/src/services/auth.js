import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL || "http://localhost:3001"}/auth`;

const login = (email, password) => {
  return axios
    .post(`${baseUrl}/login`, { email, password }, { withCredentials: true })
    .then((response) => response.data);
};

const logout = () => {
  return axios.post(`${baseUrl}/logout`, {}, { withCredentials: true });
};

const signup = (
  username,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
) => {
  return axios.post(`${baseUrl}/signup`, {
    username,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });
};

const relog = () => {
  return axios
    .get(`${baseUrl}/relog`, { withCredentials: true })
    .then((response) => response.data);
};

const forgotPassword = (email) => {
  return axios.post(`${baseUrl}/reset-password`, {
    email,
  });
};

const checkPasswordResetValidity = (resetToken) => {
  return axios.get(`${baseUrl}/reset-password/${resetToken}`);
};

const passwordReset = (resetToken, password, confirmPassword) => {
  return axios.post(`${baseUrl}/reset-password/${resetToken}`, {
    password,
    confirmPassword,
  });
};

const authServices = {
  login,
  logout,
  signup,
  relog,
  forgotPassword,
  checkPasswordResetValidity,
  passwordReset,
};

export default authServices;
