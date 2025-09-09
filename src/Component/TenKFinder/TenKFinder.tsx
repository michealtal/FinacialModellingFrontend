import React, { useEffect, useState } from 'react'
import type { CompanyTenK } from '../../companyd'
import { getTenK } from '../../api'
import TenKFinderItem from './TenKFinderItem/TenKFinderItem'
import Spinner from '../Spinner/Spinner'

type Props = {
  ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
  const [tenKData, setTenKData] = useState<CompanyTenK[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getTenKData = async () => {
      try {
        const value = await getTenK(ticker)
        setTenKData(value)
      } catch (err: any) {
        console.error("Error fetching 10-K data:", err)
        if (err.response?.status === 402) {
          setError("This endpoint requires a paid FMP plan.")
        } else {
          setError("Failed to fetch 10-K data.")
        }
      } finally {
        setLoading(false)
      }
    }
    getTenKData()
  }, [ticker])

  if (loading) {
    return <Spinner isLoading={true} />
  }

  if (error) {
    return <div className="text-red-500 m-4">{error}</div>
  }

  if (!tenKData || tenKData.length === 0) {
    return <div className="m-4">No 10-K data available</div>
  }
  

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {tenKData.map((tenK) => (
        <TenKFinderItem key={tenK.fillingDate} tenK={tenK} />
      ))}
    </div>
  )
}

export default TenKFinder
