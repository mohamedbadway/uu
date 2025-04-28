import React, { useEffect } from 'react'
import Banner from '../banner/Banner'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <Banner className={"banner page-banner notfound"} background={" linear-gradient(0deg, transparent, #fff0e5, #fff0e5)"} >
    <h1 className='banner-header'> Not Found </h1>
    <h4 className='fz-10'>This Page Doesn't Exist</h4>
    </Banner>

    </>
  )
}

export default NotFound
