"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { astonMartinChasis } from '../../../assets/teams'


export default function Page() {

    const [ImageArr, setImageArr] = useState([
        `https://p.turbosquid.com/ts-thumb/KD/02iohL/gJ/screenshot_camera_side_2a/jpg/1680682548/1920x1080/fit_q87/410ef5a084a00c7988332bf4f12fce514d0c3549/screenshot_camera_side_2a.jpg`,
        // `https://liquipedia.net/commons/images/9/98/Aston_Martin_AMR23.jpg`,
        `https://www.racefans.net/wp-content/uploads/2023/02/Untitled-5.jpg`,
        `https://www.racefans.net/wp-content/uploads/2023/02/Untitled-2.jpg`,
        `https://www.racefans.net/wp-content/uploads/2023/02/racefansdotnet-2023-02-12_2342519.jpg`,
        `https://www.racefans.net/wp-content/uploads/2023/02/racefansdotnet-2023-02-13_0028477.jpg`,
        `https://www.racefans.net/wp-content/uploads/2023/02/racefansdotnet-2023-02-13_0047112.jpg`,
        `https://www.racefans.net/wp-content/uploads/2023/02/racefansdotnet-2023-02-13_0151441.jpg`,
        // `/ferrari/f13.jpg`,
        `https://www.racefans.net/wp-content/uploads/2023/02/racefansdotnet-23-02-13-20-39-36-1.jpg`,
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
                <b className=" text-lg md:text-4xl text-astonMartin_green font-F1W">Aston Martin</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#00665E'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                    The Aston Martin AMR23 is a Formula One race car developed by the Aston Martin Aramco Cognizant Formula One Team for the 2023 Formula One World Championship. Designed with a focus on aerodynamics and power efficiency, the AMR23 is powered by a powerful Mercedes-AMG power unit and features cutting-edge technology that enhances performance and stability on the track. With drivers Fernando Alonso and Lance Stroll behind the wheel, the AMR23 marks Aston Martin’s commitment to returning to the top of Formula One. The car blends engineering precision and speed, ensuring a strong presence at every race and reaffirming Aston Martin’s ambitions in the motorsport world.                    </div>
                    <div>
                    Lets have a deeper look into the Aston Martin AMR23:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={astonMartinChasis} color={'#00665E'} />
        </div>
    )
}
