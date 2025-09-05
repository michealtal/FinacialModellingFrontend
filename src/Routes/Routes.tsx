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
 
export const router = createBrowserRouter([
  {
    path: "/",  
    element:<App/>,
    children:[
        {path:"", element:<HomePage />},
        {path:"search", element:<SearchPage />},
        {path:"design-guide", element:<DesignPage />},
        {path:"company/:ticker", 
          element:<CompanyPage />,
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