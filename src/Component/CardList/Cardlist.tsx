import React, { type SyntheticEvent } from 'react'
import Card from '../card/Card'
import type { CompanySearch } from '../../companyd'
import { v4 as uuidv4 } from 'uuid';


interface Props  {
  searchResult: CompanySearch[];
  onPortfolioCreate:(e: SyntheticEvent)=> void;
}

const Cardlist : React.FC<Props> = ({searchResult, onPortfolioCreate}: Props) => {
  return (
    <>
        {searchResult.length > 0 ?(
          searchResult.map((result) => {
            return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
          })
        ):(
          <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
        )}
    </>
  )
}

export default Cardlist   