import axios from 'axios';
// Set config defaults when creating the instance
export const API = axios.create({
	baseURL: 'https://fakhrilak-ts009.herokuapp.com/api/ts-009/'
	//baseURL: 'http://localhost:5000/api/ts-009/'
});