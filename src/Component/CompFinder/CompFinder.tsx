import React, { useEffect, useState } from 'react'
import type { CompanyCompData } from '../../companyd'
import { getCompData } from '../../api'
import CompFinderItem from './CompFinderItem/CompFinderItem'
import Spinner from '../Spinner/Spinner'

type Props = {
  ticker: string;
}

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getComps = async () => {
      try {
        const value = await getCompData(ticker)
        if (value && value.length > 0) {
          setCompanyData(value[0])
        } else {
          setError("No company data found.")
        }
      } catch (error: any) {
        if (error.response?.status === 402) {
          setError("This endpoint requires a paid FMP plan.")
        } else {
          setError("Failed to fetch comp data.")
        }
        console.error("Error Fetching Comp data", error)
      } finally {
        setLoading(false)
      }
    }
    getComps()
  }, [ticker])

  if (loading) {
    return <Spinner isLoading={true} />
  }
  if (error) {
    return <div className="text-red-500 m-4">{error}</div>
  }
  if (!companyData || !companyData.peersList || companyData.peersList.length === 0) {
    return <div className="m-4">No comp data available</div>
  }

  return (
    <div className="rounded-md shadow-sm inline-flex m-4">
      {companyData.peersList.map((peerTicker) => (
        <CompFinderItem key={peerTicker} ticker={peerTicker} />
      ))}
    </div>
  )
}

export default CompFinder
