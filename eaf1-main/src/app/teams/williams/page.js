"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { williamsChasis } from '../../../assets/teams'


export default function Page() {

    const baseUrl = 'https://cdn.williamsf1.tech/images/fnx611yr/production/0e9311bf89a04ccfcf6d8dc2bebdbef673a99482-3679x2069.jpg'

    const [ImageArr, setImageArr] = useState([
        `https://cdn.williamsf1.tech/images/fnx611yr/production/0e9311bf89a04ccfcf6d8dc2bebdbef673a99482-3679x2069.jpg?w=1440&auto=format`,
        `https://cdn.williamsf1.tech/images/fnx611yr/production/bce72b18d73a7b4829cf7f4c2b992d2ad1fcea37-7503x5002.jpg?h=960&auto=format`,
        `https://cdn.williamsf1.tech/images/fnx611yr/production/9ed73c38bdc73b0ac6177d967ea16efb172de003-7310x4873.jpg?h=960&auto=format`,
        `/williams/williams.jpg`,
        `https://cdn.williamsf1.tech/images/fnx611yr/production/fadacf5666ea1b38decd03afc91d730976e45ce7-7911x5274.jpg?h=960&auto=format`,
        `https://cdn.williamsf1.tech/images/fnx611yr/production/20440171e5301f1c4f97049675d04d9a1f1ec8b1-4088x2298.jpg?w=1440&auto=format`,
        `https://cdn.williamsf1.tech/images/fnx611yr/production/1263d507b288ba911420ef9ae3002d6d55a7b8b7-4088x2298.jpg?w=1440&auto=format`,
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
                <b className=" text-lg md:text-4xl text-[#00a3e0] font-F1W">Williams</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#00a3e0'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                        The Williams FW45 is the Formula One car developed by the Williams Racing team for the 2023 Formula One World Championship. Building on the team’s renewed focus on performance and innovation, the FW45 continues the partnership with Mercedes for its power unit while integrating a new aerodynamic package designed to improve both downforce and overall stability. With a sleek, lightweight chassis, the FW45 aims to close the gap to the midfield teams and take Williams back to the top tier of F1 racing. Drivers Alexander Albon and Logan Sargeant lead the charge for Williams in 2023, with the team focused on consistency and maximizing the car’s potential across a variety of circuits.
                    </div>
                    <div>
                        Lets have a deeper look into the Williams FW45:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={williamsChasis} color={'#00a3e0'} />
        </div>
    )
}
