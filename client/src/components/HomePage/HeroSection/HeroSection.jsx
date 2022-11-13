import React from 'react'
import sl from './heroSection.module.scss'
import bg from '../../../img/home-page/bg-img.jpg'

import { ReadMore,} from '../../UI/'
import {arrow} from '../../../img/'

const HeroSection = () => {
  return (
    <div className=' relative overflow-hidden'>
      <div className='container relative mb-36 xl:mb-6 lg:mb-4'>
        <div className=''>
          <h2 className={sl.hero__second__text}>Christmas</h2>
          <h1 className={sl.hero__main__text}>Decor</h1>
          <p className={sl.p}>The best Christmas decoration just for you</p>
          <ReadMore to='#' img={arrow} className='flex gap-1'>Read more</ReadMore>
        </div>
      </div>
      <img src={bg} alt="bg" className={`absolute -top-20 -z-20 w-[100%] lg:object-right`} />

    </div>
  )
}

export default HeroSection