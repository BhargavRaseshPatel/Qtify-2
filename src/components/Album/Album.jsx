import React, { useEffect, useState } from 'react'
import './Album.css'
import ListOfSong from './ListOfSong';

const Album = () => {

    const [topAlbum, setTopAlbum] = useState([]);
    const [newAlbum, setNewAlbum] = useState([]);
    const [song, setSong] = useState([])

    useEffect(() => {
        fetchTheAlbum()
    }, [])

    const fetchTheAlbum = async () => {
        try {
            let response = await fetch('https://qtify-backend-labs.crio.do/albums/top')
            let data = await response.json()
            setTopAlbum(data)

            response = await fetch('https://qtify-backend-labs.crio.do/albums/new')
            data = await response.json()
            setNewAlbum(data)

            response = await fetch('https://qtify-backend-labs.crio.do/songs')
            data = await response.json()
            setSong(data)
        } catch (error) {
            console.log("Error while fetching the albumb",error)
        }
    }
    return (
        <div className='album'>
            {/* {topAlbum.map((al, index) => ( */}
                <ListOfSong album={topAlbum} name={'Top Album'}/>
                <ListOfSong album={newAlbum} name={'New Album'}/>
                <ListOfSong album={song} name={'Songs'} />
            {/* ))} */}
        </div>
    )
}

export default Album