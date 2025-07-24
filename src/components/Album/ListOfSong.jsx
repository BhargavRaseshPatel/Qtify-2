import React, { useEffect, useState } from 'react'
import './ListOfSong.css'
import Card from './Card'

//swiper
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavigationButton from './NavigationButton';

const ListOfSong = ({ album, name }) => {

    const [swiperData, setSwiperData] = useState([])
    const [showAllSongs, setShowAllSongs] = useState(false)
    const [value, setValue] = React.useState('0');

    useEffect(() => {
        let songs = [];

        if (name != "Songs" || value == 0) {
            songs = album || []
        } else {
            if (value != 0) {
                const filterSongs = album.filter(element => element.genre.key == allGenres[value].key)
                songs = filterSongs;
            }
        }

        let groupedSongs = []
        let swiperListSong = []

        songs.forEach((element, idx) => {
            swiperListSong.push(element)
            if (swiperListSong.length === 7 || idx === songs.length - 1) {
                groupedSongs.push(swiperListSong)
                swiperListSong = []
            }
        })

        setSwiperData(groupedSongs)
        console.log(swiperData)

    }, [album, value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const allGenres = [{ key: 'all', label: 'All' }, { key: "jazz", label: "Jazz" }, { key: "rock", label: "Rock" }, { key: "pop", label: "Pop" }, { key: "blues", label: "Blues" }]

    const tabContent = () => (
        <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" textColor='white' sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#34C94B',
                            },
                        }}>
                            {allGenres.map((element, index) => (
                                <Tab label={element.label} value={"" + index} />
                            ))}
                        </TabList>
                    </Box>
                </TabContext>
            </Box>
        </div>
    )


    return (
        <div className='listOfSong'>
            <div className='title'>
                <p className='title-name'>{name}</p>
                {name !== 'Songs' && (
                    <p
                        onClick={() => setShowAllSongs(!showAllSongs)}
                        className='song-list-type'
                    >
                        {showAllSongs ? 'Collapse' : 'Show all'}
                    </p>
                )}
            </div>

            {name === 'Songs' && tabContent()}

            {!showAllSongs ? (
                <Swiper modules={[Navigation]} className="mySwiper swiper">
                    {swiperData?.map((element, gropIndex) => (
                        <SwiperSlide key={gropIndex}>
                            <div className='songs'>
                                {element?.map((cardElement, index) => (
                                    <Card
                                        song={cardElement}
                                        key={index}
                                        songAlbum={name === 'Songs'}
                                    />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                    <NavigationButton />
                </Swiper>
            ) : (
                <div>
                    {swiperData?.map((element, gropIndex) => (
                        <div className='songs' key={gropIndex}>
                            {element?.map((cardElement, index) => (
                                <Card song={cardElement} key={index} />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}

export default ListOfSong