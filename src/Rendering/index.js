import React from 'react'
import DecornestHomepage from './decornest-homepage'
import DecornestProductDetails from './decornest-product-details'
import DecornestAboutUs from './decornest-aboutus/inidex'
import DecornestShop from './decornest-shop'
import DecornestContactUs from './decornest-contactus'
import DecornestBlogs from './decornest-blogs'
import DecornestServices from './decornest-services'

export default function DecornestAllPages() {
  return (
    <div>
      <DecornestHomepage/>
      <DecornestShop/>
      <DecornestProductDetails/>
      <DecornestBlogs/>
      <DecornestServices/>
      <DecornestAboutUs/>
      <DecornestContactUs/>
    </div>
  )
}
