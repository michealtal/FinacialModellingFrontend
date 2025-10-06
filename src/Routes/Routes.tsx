 import { createBrowserRouter} from "react-router-dom"
 import App from "../App"
 import HomePage from "../Pages/HomePage/HomePage"
 import SearchPage from "../Pages/SearchPage/SearchPage"
 import CompanyPage from "../Pages/CompanyPage/CompanyPage"
 import CompanyProfile from "../Component/CompanyProfile/CompanyProfile"
 import IncomeStatement from "../Component/IncomeStatement/IncomeStatement"
import DesignPage from "../Component/DesignPage/DesignPage"
import BalanceSheet from "../Component/BalanceSheet/BalanceSheet"
import CashFlowStatement from "../Component/CashFlowStatement/CashFlowStatement"
import LoginPage from "../Pages/Login/LoginPage"
import RegisterPage from "../Pages/RegisterPage.css/RegisterPage"
import ProtectedRoute from "./ProtectedRoute"
 
export const router = createBrowserRouter([
  {
    path: "/",  
    element:<App/>,
    children:[
        {path:"", element:<HomePage />},
        {path:"login", element:<LoginPage />},
        {path:"register", element:<RegisterPage />},
        {path:"search", element:<ProtectedRoute><SearchPage /></ProtectedRoute>}, 
        {path:"design-guide", element:<DesignPage />},
        {path:"company/:ticker", 
          element:<ProtectedRoute><CompanyPage /></ProtectedRoute>,
        children:[
          {path:"company-profile", element:<CompanyProfile />},
          {path:"income-statement", element:<IncomeStatement />},
          {path:"balance-sheet", element:<BalanceSheet/>},
          {path:"cashflow-statement", element:<CashFlowStatement/>}
        ]
      }
    ]
  }
])