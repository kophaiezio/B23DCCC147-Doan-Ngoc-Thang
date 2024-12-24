"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { alfaChasis } from '../../../assets/teams'


export default function Page() {

    const [ImageArr, setImageArr] = useState([
        `/alfa/alfa1.jpg`,
        `/alfa/alfa2.jpg`,
        `/alfa/alfa3.jpg`,
        `/alfa/alfa4.jpg`,
        `/alfa/alfa5.jpg`,
        `/alfa/alfa6.jpg`,
        `/alfa/alfa7.jpg`,
    ]);


    const updateState = (imgArr) => {
        setImageArr(imgArr)
    }

    return (
        <div >
            <div>
                <NavBar type={"teams"} />
            </div>
            <div className='flex flex-col justify-center items-center mt-8'>
                <b className=" text-lg md:text-4xl text-[#A50F2D] font-F1W">Alfa Romeo</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#A50F2D'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                        The Alfa Romeo F1 Team ORLEN C43 is the Formula One car developed by Alfa Romeo for the 2023 Formula One World Championship. Built with the collaborative efforts of Alfa Romeo, Sauber Engineering, and Ferrari for the power unit, the C43 is a refined version of its predecessor, with improvements in aerodynamics, weight distribution, and overall balance. Featuring the design expertise of Sauber’s engineering team and powered by Ferrari’s hybrid power unit, the C43 is engineered to push for higher grid positions and podium finishes. With experienced drivers Valtteri Bottas and Zhou Guanyu behind the wheel, the C43 represents Alfa Romeo’s commitment to competing at the highest level of motorsport, with cutting-edge technology and strategic development at its core.
                    </div>
                    <div>
                        Lets have a deeper look into the Alfa Romeo ORLEN C43:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={alfaChasis} color={'#A50F2D'} />
        </div>
    )
}
