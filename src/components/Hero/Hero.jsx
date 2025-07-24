import React from 'react'
import './Hero.css'
import hero_headphone from '../../assets/hero_headphones.png'

const Hero = () => {
    return (
        <>
            <div className='hero-container'>
                <div className='header-text'>
                    <p className='text'>100 Thousand Songs, ad-free</p>
                    <p className='text-second'>Over thousand podcast episodes</p>
                </div>
                <div className="hero-image">
                    <img style={{ width: '212px', height: '212px' }} src={hero_headphone} alt='headphone image' />
                </div>
            </div>
        </>
    )
}

export default Hero