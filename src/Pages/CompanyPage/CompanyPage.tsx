import React, { useEffect, useState } from "react";
import { getCompanyProfile } from "../../api";
import { useParams } from "react-router-dom";
import type { CompanyProfile } from "../../companyd";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Company from "../../Component/Company/Company";
import Tile from "../../Component/Tile/Tile";
import Spinner from "../../Component/Spinner/Spinner";
import CompFinder from "../../Component/CompFinder/CompFinder";
import TenKFinder from "../../Component/TenKFinder/TenKFinder";

const CompanyPage = () => {
  const { ticker } = useParams<{ ticker: string }>();
  const [company, setCompany] = useState<CompanyProfile | null>(null);

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);

      if (Array.isArray(result) && result.length > 0) {
        setCompany(result[0]); // ✅ first company from array
      } else {
        setCompany(null); // error case or no data
      }
    };

    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
       <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar/>
          <Company ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
            <CompFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />
            <p className="bg-white shadow-lg rounded text-gray-900 p-3 mt-1 m-4">{company.description}</p>
          </Company>
      
     </div>
      ) : (
        <Spinner isLoading={true}/>
      )}
    </>
  );
};

export default CompanyPage;
