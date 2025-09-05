import React, { useEffect, useState } from 'react'
import type { CompanyCompData } from '../../companyd'
import { getCompData } from '../../api'
import { Link } from 'react-router-dom';
import CompFinderItem from './CompFinderItem/CompFinderItem';
type Props = {
    ticker: string;
}

const CompFinder = ({ticker}: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData>()
    useEffect(() => {
        const getComps = async () => {
            const value = await getCompData(ticker)
            setCompanyData(value[0])
        }
        getComps()
    }, [ticker])
  return (
    <div className='rounded-md shadow-sm inline-flex m-4'>
        {companyData?.peersList.map((ticker) => (
            <CompFinderItem key={ticker} ticker={ticker} />
        ))}
    </div>
  )
}

export default CompFinder