import axios from "axios";
import {handleError} from "../Helpers/ErrorHandler";
import type{ UserProfileToken } from "../Models/User";

const api = "http://localhost:5000/api/";   
//5167

export const loginApi = async(username: string, password : string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/login", {
            UserName:username,
            Password:password, 
        });
        return data
    } catch (error) {        
        handleError(error)  
    } 
}
  
export const registerApi = async(email: string, username: string, password : string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/register", {
            EmailAddress:email,     
            UserName:username,  
            Password:password,
        }); 
        return data  
    } catch (error) {
        handleError(error)
        
    }
}