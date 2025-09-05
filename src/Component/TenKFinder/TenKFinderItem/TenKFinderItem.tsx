import React from 'react'
import type { CompanyTenK } from '../../../companyd';
import { Link } from 'react-router-dom';

type Props = {
    tenK: CompanyTenK;
}

const TenKFinderItem = ({tenK}: Props) => {
    const fillingDate = new Date(tenK.fillingDate).getFullYear();
  return (
   <Link 
   reloadDocument={true}
   to={tenK.finalLink}
   type='button'
   className='inline-flex items-center justify-center p-4 text-white bg-lightGreen rounded-md'
   >
    10K - {tenK.symbol} - {fillingDate} {" "}
   </Link>
  )
}

export default TenKFinderItem