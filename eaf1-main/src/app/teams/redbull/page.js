"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { redbullChasis } from '../../../assets/teams'


export default function Page() {

    const mercedesUrl = "https://images.ctfassets.net/1fvlg6xqnm65"

    const [ImageArr, setImageArr] = useState([
        `https://www.topgear.com/sites/default/files/2023/02/1%20Red%20Bull%20F1.jpeg?w=1280&h=720`,
        `https://www.topgear.com/sites/default/files/2023/02/2%20Red%20Bull%20F1.jpeg?w=1280&h=720`,
        `https://www.topgear.com/sites/default/files/2023/02/3%20Red%20Bull%20F1.jpeg?w=1280&h=720`,
        `https://www.topgear.com/sites/default/files/2023/02/4%20Red%20Bull%20F1.jpeg?w=1280&h=720`,
        `https://www.topgear.com/sites/default/files/2023/02/SI202301310390_hires_jpeg_24bit_rgb.jpg?w=1280&h=720`,
        `https://www.topgear.com/sites/default/files/2023/02/SI202301310397_hires_jpeg_24bit_rgb.jpg?w=1280&h=720`,
        `https://wallpapercave.com/wp/wp12159223.jpg`,
        `https://news.verstappen.com/img/2023/Formule_1_GP_Abu_Dhabi_-_Yas_Marina/SI202311260240_hires_jpeg_24bit_rgb-11b.jpg`
    ]);    

    const updateState = (imgArr) => {
        setImageArr(imgArr)
    }

    return (
        <div >
            <div>
                <NavBar type={"teams"}/>
            </div>
            <div className='flex flex-col justify-center items-center mt-8'>
                <b className="  text-lg md:text-4xl text-redbull_blue font-F1W">Red Bull</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#173084'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>The Red Bull Racing RB19 is a Formula One race car developed by the Red Bull Racing team for the 2023 Formula One World Championship. Powered by the Honda RBPTH001 power unit, the RB19 is engineered to deliver unparalleled performance, agility, and speed on the track. With Max Verstappen and Sergio Pérez behind the wheel, the car continues Red Bull’s dominance in the sport, combining innovative aerodynamics, precise handling, and cutting-edge hybrid power technology. The RB19 is a testament to Red Bull Racing’s commitment to excellence, pushing the boundaries of engineering and performance in Formula One.</div>
                    <div>
                    Lets have a deeper look into the Red Bull Racing RB19:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={redbullChasis} color={'#173084'} />
        </div>
    )
}
