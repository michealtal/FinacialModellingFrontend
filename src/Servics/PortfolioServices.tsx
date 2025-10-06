import axios from "axios";
import type{ PortfolioGet,PortfolioPost} from "../Models/Portfolio";
import {handleError} from "../Helpers/ErrorHandler";
//import { useAuth } from "../Context/UseAuth";

const api = "http://localhost:5000/api/portfolio/"

const getAuthHeader = () => {
        const token = localStorage.getItem("token");
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    };


    console.log("Auth header:", getAuthHeader());

export const portfolioAddAPI = async (symbol: string) => {
    try {
       const data = await axios.post<PortfolioPost>(api + `?symbol=${symbol}`,{},getAuthHeader());
       return data;
    } catch (error) {
        handleError(error)
    } 
}

export const portfolioDeleteAPI = async (symbol: string) => {
    try {
       const data = await axios.delete<PortfolioPost>(api + `?symbol=${symbol}`,getAuthHeader());
       return data;
    } catch (error) {
        handleError(error)
    }
}

export const portfolioGetAPI = async () => {
    try {
       const data = await axios.get<PortfolioGet[]>(api,getAuthHeader());
       return data;
    } catch (error) {
        handleError(error)
    }
}