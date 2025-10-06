import { useState , useEffect, type SyntheticEvent} from 'react'
import {toast} from 'react-toastify'
import type { CompanySearch } from '../../companyd'
import Cardlist from '../../Component/CardList/Cardlist'
import { searchCompany } from '../../api'
import Search from '../../Component/Search/Search'
import type{PortfolioGet} from '../../Models/Portfolio'
import {portfolioGetAPI, portfolioAddAPI, portfolioDeleteAPI} from '../../Servics/PortfolioServices'
import ListPortfolio from '../../Component/Portfolio/ListPortfolio/ListPortfolio'

interface Props  {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>('');
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
          setSearch(e.target.value);
          console.log(e.target.value);
      }

      useEffect(() => {
        getPortfolio()
      },[])

      const getPortfolio = () => {
        portfolioGetAPI()
        .then((res) => {
          if (res?.data) {
            setPortfolioValues(res?.data)
          }
        }).catch((e) => {
          toast.warning("Could not get portfolio values!")
        })
      }
  
      const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompany(search);
      
        if (typeof result === "string") {
          setServerError(result);
        } else {
          setSearchResult(result); // directly the array
        }
      
        console.log("Search results:", result);
      };
  
      const onPortfolioCreate = (e:any) => {
        e.preventDefault();
        portfolioAddAPI(e.target[0].value)
        .then((res) => {
          if (res?.status === 204) {
            toast.success("Stock added to portfolio!")
            getPortfolio();
          }
        }).catch((e) => {
          toast.warning("Could not create portfolio item!")
        })
      }
  
      const onPortfolioDelete = (e:any) => {
        e.preventDefault();
        portfolioDeleteAPI(e.target[0].value)
        .then((res) => {
          if (res?.status === 200) {
            toast.success("Portfolio Deleted Sucessfully!")
            getPortfolio();
          }
        })
      }

  return (
    <div className="bg-blue-400">
    <Search onSubmit = {handleSubmit} search ={search} handleSearchChange = {handleChange} />
    
    <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete}  />

    {serverError && <h1>{serverError}</h1>}
    <Cardlist searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
   </div>
  )
}

export default SearchPage