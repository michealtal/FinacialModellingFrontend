import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    ticker: string;
}

const CompFinderItem = ({ticker}: Props) => {
  return (
  
        <Link reloadDocument={true}
         to={`/company/${ticker}/company-profile`} 
         type='button'
         className='inline-flex items-center justify-center p-4 rounded-md'
         >
            {ticker}
              
            </Link>
  
  )
}

export default CompFinderItem