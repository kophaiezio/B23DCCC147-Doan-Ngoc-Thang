"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { AlphaTauriChasis } from '../../../assets/teams'


export default function Page() {

    const [ImageArr, setImageArr] = useState([
        `https://pbs.twimg.com/media/FotzBVnWAAES08P?format=jpg&name=large`,
        `https://pbs.twimg.com/media/FotzBokXgAEtPEq?format=jpg&name=large`,
        `https://pbs.twimg.com/media/FotzB4UXgAQKQ-J?format=jpg&name=large`,
        `https://pbs.twimg.com/media/FotzCJjWAAALm24?format=jpg&name=large`,
        `/alpha/AlphaTauri2.jpg`,
        `/alpha/AlphaTauri1.jpg`,
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
                <b className=" text-lg md:text-4xl text-[#00293F] font-F1W">AlphaTauri</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#00293F'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                    The AlphaTauri AT04 is the Formula One car developed by Scuderia AlphaTauri for the 2023 Formula One World Championship. Continuing the collaboration with engine partner Honda, the AT04 is an evolution of its predecessor, featuring a refined aerodynamic design, better integration of the hybrid power unit, and an optimized chassis to enhance performance across various circuits. With a focus on reducing drag and improving overall downforce, the AT04 is designed to improve cornering speeds while maintaining reliability throughout the season. Driven by experienced driver Pierre Gasly and newcomer Yuki Tsunoda, the AT04 aims to challenge for consistent points finishes and bring the team closer to the top of the midfield, combining technological precision with the team’s racing pedigree.                    </div>
                    <div>
                    Lets have a deeper look into the AlphaTauri AT04:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={AlphaTauriChasis} color={'#00293F'} />
        </div>
    )
}
