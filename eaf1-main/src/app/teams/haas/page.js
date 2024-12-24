"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { haasChasis } from '../../../assets/teams'


export default function Page() {

    const baseUrl = 'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,g_faces,ar_16:9/content/dam/fom-website/manual/2023/Haas'

    const [ImageArr, setImageArr] = useState([
        `${baseUrl}/Haas-Hulk-1`,
        `${baseUrl}/Haas-Hulk-2`,
        `${baseUrl}/Haas-Hulk-3`,
        `${baseUrl}/Haas-Mag-1`,
        `${baseUrl}/Haas-Mag-2`,
        `${baseUrl}/Haas-Mag-3`,
        `${baseUrl}/Haas-Mag-Hulk`,

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
                <b className=" text-lg md:text-4xl text-[#111111] font-F1W">Haas</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#111111'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                    The Haas VF-23 is the Formula One car developed by the Haas F1 Team for the 2023 Formula One World Championship. Continuing its partnership with Ferrari for the power unit, the VF-23 features a refined design with an emphasis on aerodynamics and mechanical efficiency. The car is designed to better integrate the power unit with the chassis, offering improved handling and performance across various circuits. With a focus on maximizing downforce and optimizing tire usage, the VF-23 aims to be more competitive in the midfield battle, with drivers Kevin Magnussen and Nico Hülkenberg leading the charge. The VF-23 showcases Haas’s commitment to development and ambition to push further up the grid in the 2023 season.                    </div>
                    <div>
                    Lets have a deeper look into the Haas VF-23:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={haasChasis} color={'#111111'} />
        </div>
    )
}
