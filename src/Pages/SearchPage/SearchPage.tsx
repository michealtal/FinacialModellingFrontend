import { useState , useEffect, type SyntheticEvent} from 'react'
import type { CompanySearch } from '../../companyd'
import Cardlist from '../../Component/CardList/Cardlist'
import { searchCompany } from '../../api'
import Search from '../../Component/Search/Search'
import ListPortfolio from '../../Component/Portfolio/ListPortfolio/ListPortfolio'

interface Props  {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>('');
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
          setSearch(e.target.value);
          console.log(e.target.value);
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
        const exist = portfolioValues.find((value) => value === e.target[0].value)
        if (exist) return;
        const updatedPortFolio = [...portfolioValues, e.target[0].value]
        setPortfolioValues(updatedPortFolio)
      }
  
      const onPortfolioDelete = (e:any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => value !== e.target[0].value)
        setPortfolioValues(removed)
      }

  return (
    <div className="bg-blue-400">
    <Search onSubmit = {handleSubmit} search ={search} handleSearchChange = {handleChange} />
    
    <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}  />

    {serverError && <h1>{serverError}</h1>}
    <Cardlist searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
   </div>
  )
}

export default SearchPage