import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CustomDiv = styled.div`
    padding: 16px;
    background-color: #f0f0f0;
`

function CompanyProfile({companyData}) {
    const [data,setData] = useState("")

    console.log(companyData)

    useEffect(() => {
        setData("Nissi Bintaro Campus")
    },[])

  

  return (
    <CustomDiv>
      <div>company Profile : {data} </div>
      <h1>Company Name : {companyData.name} </h1>
      <h2>Company Address : {companyData.address} </h2>
      <button onClick={() => setData("PT indodev Niaga Internet")}>
        Add Company name
      </button>
    </CustomDiv>
  )
}

export default CompanyProfile
