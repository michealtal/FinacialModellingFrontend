import axios, { AxiosError } from "axios";
import type { CompanySearch, CompanyProfile, CompanyKeyMetrics, CompanyIncomeStatement, CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyTenK } from "./companyd";


interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompany = async (query: string) => {
  try {
    const response = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/stable/search-symbol`,
      {
        params: { query, apikey: import.meta.env.VITE_API_KEY }, // Vite style env
      }
    );
    return response.data; // <-- just the array
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error searching companies:", error.response?.status, error.message);
      return `Axios error: ${error.response?.status} ${error.message}`;
    } else {
      console.error("Unexpected error", error);
      return "An unexpected error occurred";
    }
  }
};

export const getCompanyProfile = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      "https://financialmodelingprep.com/stable/profile",
      {
        params: { symbol, apikey: import.meta.env.VITE_API_KEY }, // ✅ use symbol, not query
      }
    );
    return response.data; // <-- API returns an array
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error searching companies:",
        error.response?.status,
        error.message
      );
      return [];
    } else {
      console.error("Unexpected error", error);
      return [];
    }
  }
};

export const getKeyMetrics = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyKeyMetrics[]>(
      "https://financialmodelingprep.com/stable/key-metrics",
      {
        params: { symbol, apikey: import.meta.env.VITE_API_KEY }, // ✅ use symbol, not query
      }
    );
    return response.data; // <-- API returns an array
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error searching companies:",
        error.response?.status,
        error.message
      );
      return [];
    } else {
      console.error("Unexpected error", error);
      return [];
    }
  }
};

export const getIncomeStatement = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyIncomeStatement[]>(
      "https://financialmodelingprep.com/stable/income-statement",
      {
        params: { symbol, limit:40, apikey: import.meta.env.VITE_API_KEY }, // ✅ use symbol, not query
      }
    );
    return response.data; // <-- API returns an array
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error searching companies:",
        error.response?.status,
        error.message
      );
      return [];
    } else {
      console.error("Unexpected error", error);
      return [];
    }
  }
};

export const getBalanceSheet = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyBalanceSheet[]>(
      "https://financialmodelingprep.com/stable/balance-sheet-statement/",
      {
        params: { symbol, limit:40, apikey: import.meta.env.VITE_API_KEY }, // ✅ use symbol, not query
      }
    );
    return response.data; // <-- API returns an array
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error searching companies:",
        error.response?.status,
        error.message
      );
      return [];
    } else {
      console.error("Unexpected error", error);
      return [];
    }
  }
};

export const getCashFlowStatement = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyCashFlow[]>(
      "https://financialmodelingprep.com/stable/cash-flow-statement/",
      {
        params: { symbol, limit:40, apikey: import.meta.env.VITE_API_KEY }, // ✅ use symbol, not query
      }
    );
    return response.data; // <-- API returns an array
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error searching companies:",
        error.response?.status,
        error.message
      );
      return [];
    } else {
      console.error("Unexpected error", error);
      return [];
    }
  }
};


export const getCompData = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyCompData[]>(
      "https://financialmodelingprep.com/stable/stock-peers/",
      {
        params: { symbol, limit:40, apikey: import.meta.env.VITE_API_KEY }, // ✅ use symbol, not query
      }
    );
    return response.data; // <-- API returns an array
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error searching companies:",
        error.response?.status,
        error.message
      );
      if (error.response?.status === 402) {
        throw new Error("402: This endpoint requires a paid FMP plan.")
      }
      throw new Error(`API error: ${error.response?.status} ${error.response?.statusText}`)
    }
    throw new Error("Unexpected error fetching comp data")
  
      return [];
    
  }
};

export const getTenK = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyTenK[]>(
      "https://financialmodelingprep.com/stable/sec-filings-financials/",
      {
        params: { symbol, from:"2024-01-01", to:"2024-03-01", page:0, limit:100, apikey: import.meta.env.VITE_API_KEY }, // ✅ use symbol, not query
      }
    );
    return response.data || []; // <-- API returns an array
  } catch (error : any) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error searching companies:",
        error.response?.status,
        error.message
      );
      if (error.response?.status === 402) {
        throw new Error("402: This endpoint requires a paid FMP plan.")
      }
      throw new Error(`API error: ${error.response?.status} ${error.response?.statusText}`)
    }
    throw new Error("Unexpected error fetching 10-K data")
  
  }
} 