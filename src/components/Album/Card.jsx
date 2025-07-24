import React from 'react'
import './Card.css'
import { Chip } from '@mui/material'
// import Stack from '@mui/material'

const Card = ({ song, songAlbum }) => {
    const { image, likes, title } = song
    return (
        <div className='card'>
            <div className="card-content">
                <img src={image} className='image' />
                {songAlbum ?<Chip label={`${likes} Likes`} size='small' color='black'/> :<Chip label={`${likes} Follows`} size='small' color='black'/>}
            </div>
            <p className='text-title'>{title}</p>
        </div>
    )
}

export default Card