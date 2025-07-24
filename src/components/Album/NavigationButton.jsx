import React from 'react'
import LeftButton from './../../assets/LeftArrow.svg'
import RightButton from './../../assets/RightArrow.svg'
import { useSwiper } from 'swiper/react'
import './NavigationButton.css'

const NavigationButton = () => {
    const swiper = useSwiper()
    return (
        <div className='navigation-button'>
            <img className='left-button' src={LeftButton} onClick={() =>  swiper.slidePrev()} />
            <img className='right-button' src={RightButton} onClick={() => swiper.slideNext()} />
        </div>
    )
}

export default NavigationButton