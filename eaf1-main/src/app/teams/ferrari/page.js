"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { ferrariChasis } from '../../../assets/teams'


export default function Page() {

    const [ImageArr, setImageArr] = useState([
        `/ferrari/f3.jpg`,
        `/ferrari/f1.jpeg`,
        `/ferrari/f5.jpg`,
        `/ferrari/f6.jpg`,
        `/ferrari/f8.jpg`,
        `/ferrari/f10.jpg`,
        `/ferrari/f11.jpg`,
        `/ferrari/f12.jpg`,
        `/ferrari/f13.jpg`,
        `/ferrari/f14.jpg`,
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
                <b className=" text-lg md:text-4xl text-ferrari_red font-F1W">Scuderia Ferrari</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#A6051A'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                        The Ferrari SF23 is a Formula One race car developed and constructed by Scuderia Ferrari to compete in the 2023 Formula One World Championship. It is driven by Charles Leclerc and Carlos Sainz Jr. Designed to build on Ferrari&apos;s competitive edge, the SF23 incorporates advanced aerodynamics and a hybrid power unit, aiming to challenge for victories throughout the season.
                    </div>
                    <div>
                        Lets have a deeper look into the SF23:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={ferrariChasis} color={'#A6051A'} />
        </div>
    )
}
