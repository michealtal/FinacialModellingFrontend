import React, { useEffect, useState } from 'react'
import type { CompanyTenK } from '../../companyd';
import { getTenK } from '../../api';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
ticker: string;
}

const TenKFinder = ({ticker}: Props) => {
    const [tenKData, setTenKData] = useState<CompanyTenK[]>([])
    useEffect(() => {
        const getTenKData = async () => {
            const value = await getTenK(ticker)
            setTenKData(value)
        }
        getTenKData()
    }, [ticker])
  return (
    <div className='inline-flex rounded-md shadow-sm m-4'>
       {tenKData ? (
        tenKData.map((tenK) => (
           <TenKFinderItem key={tenK.fillingDate} tenK={tenK} />
        ))
       ) : (<Spinner isLoading={true}/>)}
    </div>
  )
}

export default TenKFinder