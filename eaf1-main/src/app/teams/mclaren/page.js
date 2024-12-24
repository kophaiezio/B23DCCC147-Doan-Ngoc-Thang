"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { mclarenChasis } from '../../../assets/teams'

export default function Page() {

    const f1Url = "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,g_faces,ar_16:9/content/dam/fom-website/manual/Misc/2023manual/Pre-season/February/MCL60"
    const amalgamCollectionUrl = "https://www.amalgamcollection.com/cdn/shop/files"

    const [ImageArr, setImageArr] = useState([
        `${f1Url}/5`,
        `${f1Url}/MCL60-LN4-Front-Facing-High-7K`,
        `${f1Url}/MCL60-LN4-High-7K`,
        `${f1Url}/MCL60-LN4-Overhead-7K`,
        `${f1Url}/MCL60-LN4-Side-7K`,
        `${f1Url}/MCL60-LN4-Rear-Low-7K`,
        `${amalgamCollectionUrl}/DSCF6455_4000x2677_crop_center.jpg`,
        `${amalgamCollectionUrl}/DSCF6445_4000x2677_crop_center.jpg`,
        `${amalgamCollectionUrl}/DSCF6510_4000x2677_crop_center.jpg`,
        `${amalgamCollectionUrl}/DSCF6451_01950db2-dfb6-44dd-b05a-8eb9f5f01ad2_4000x2677_crop_center.jpg`,
        `${f1Url}/3`,
        `${f1Url}/6`,
        `${f1Url}/7`,
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
                <b className=" text-lg md:text-4xl text-mclaren_orange font-F1W">McLaren</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#FF8000'}/>
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                        The McLaren MCL60 is a Formula One race car designed and built by McLaren to compete in the 2023 Formula One World Championship, driven by Lando Norris and rookie Oscar Piastri
                    </div>
                    <div>
                        Lets have a deeper look into the MCL60:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={mclarenChasis} color={'#FF8000'}/>
        </div>
    )
}
