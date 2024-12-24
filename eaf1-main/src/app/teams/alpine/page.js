"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { alpineChasis } from '../../../assets/teams'


export default function Page() {


    const baseUrl = 'https://www.racefans.net/wp-content/uploads/2023/02/racefansdotnet-23-02-16-20-'

    const [ImageArr, setImageArr] = useState([
        `${baseUrl}29-19-7.jpg`,
        `${baseUrl}29-12-9.jpg`,
        `${baseUrl}29-05-12.jpg`,
        `${baseUrl}28-52-15.jpg`,
        `${baseUrl}29-11-10.jpg`,
        `${baseUrl}28-49-16.jpg`,
        `${baseUrl}29-37-1.jpg`,
        `${baseUrl}29-24-5.jpg`,
        `${baseUrl}29-20-6.jpg`,
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
                <b className=" text-lg md:text-4xl text-[#DE41AF] font-F1W">Alpine</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#DE41AF'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                    The Alpine A523 is the Formula One race car developed by the Alpine F1 Team for the 2023 Formula One World Championship. With a continued partnership with Renault for the power unit, the A523 focuses on further refining the team’s performance with an innovative chassis and enhanced aerodynamics. Led by drivers Esteban Ocon and Pierre Gasly, the A523 embodies Alpine’s relentless pursuit of excellence, combining precision engineering and French flair. The car’s design philosophy focuses on optimizing aerodynamics, balance, and tire management, setting the stage for Alpine’s ambitions to challenge the top teams and make significant strides toward podium finishes.                    </div>
                    <div>
                    Lets have a deeper look into theAlpine A523:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={alpineChasis} color={'#DE41AF'} />
        </div>
    )
}
