import React from 'react'
import HomepageHerobanner from './homepage-herobanner'
import HomepageCategories from './homepage-categories'
import HomepageCollage from './homepage-collage'
import HomepageProducts from './homepage-products'
import HomepageMagezine from './homepage-magazine'
import HomepagePresentation from './homepage-presentation'
import HomepageFacts from './homepage-facts'

export default function DecornestHomepage() {
  return (
    <div>
      <HomepageHerobanner/>
      <HomepageCategories/>
      <HomepageCollage/>
      <HomepageProducts/>
      <HomepageMagezine/>
      <HomepagePresentation/>
      <HomepageFacts/>
    </div>
  )
}
