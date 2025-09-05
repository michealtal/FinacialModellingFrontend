import React from 'react'
import { TestDataCompany } from '../Table/testData'

type Props = {
    configs: any;
    data: any;
}



// type Company = typeof config;

// const configs = [
//   {
//     label: 'Company Name',
//     render: (company: Company) => company.companyName,
//     subTitle: 'This is The Company Name',
//   }
// ]

const RatioList = ({configs, data}: Props) => {
    const renderRows = configs.map((row:any) => {
        return (
            <li className='py-3 sm:py-4'>
                <div className='flex items-center space-x-4'>
                    <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium text-gray-900 truncate'>
                            {row.label}
                        </p>
                        <p className='text-sm text-gray-500 truncate'>
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })
  return (
    <div className='bg-white shadow rounded-lg ml-4 mb-4 mt-4 p-4 sm:p-6 xl:p.8 h-full'>
        <ul className='divide-y divide-gray-200'>
            {renderRows}
        </ul>
    </div>
  )
}

export default RatioList