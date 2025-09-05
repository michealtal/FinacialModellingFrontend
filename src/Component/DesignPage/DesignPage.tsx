import React from 'react'
import Table from "../Table/Table"
import RatioList from "../RatioList/RatioList"
import { testIncomeStatementData } from '../Table/testData'

type Props = {}

const tableConfig = [

{
  label: "Market Cap",
  render: (company: any) =>
  (company.marketCapTTM),
  subTitle: "Total value of all a company's shares of stock",
},
]

const DesignPage = (props: Props) => {
  return (
   <>
    <h1>
       FinShark Design Page 
    </h1>
    <h2>This is MikeFin Design Page This is Where We House Various Design Aspect Of The App</h2>
    <RatioList data={testIncomeStatementData} configs={tableConfig}/>
    <Table data={testIncomeStatementData} configs={tableConfig}/>
   </>

  )
}

export default DesignPage