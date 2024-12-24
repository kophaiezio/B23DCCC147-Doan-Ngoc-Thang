"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ImageGallery from '../../components/ImageGallery'
import Table from '../../components/Table'
import { mercedesChasis } from '../../../assets/teams'


export default function Page() {

    const mercedesUrl = "https://images.ctfassets.net/1fvlg6xqnm65"

    const [ImageArr, setImageArr] = useState([
        `${mercedesUrl}/28ZTvXCd0GDiie92gh74Dk/2c4d65d4d51b5fbc4a6a5ae3e0f80653/M375735.jpg`,
        `${mercedesUrl}/BA4iRsDMeqFOafiEZKCPp/5df5c208a29ccc18b2e2bef9a16dc5f4/M375742.jpg`,
        `${mercedesUrl}/6GaROvR6jk8FNgCKRY9lmD/6f5fde7761c3e2f68d543df45acf9ddf/M370485.jpg`,
        `${mercedesUrl}/31HrInN3hoS6SgsvWxwhUZ/e57a3ee37b27c5f7948b3c9148f0c090/M370499.jpg`,
        `${mercedesUrl}/pJwyo8fihahwVLW42RvqS/594a0ec46ee1547825d2ed22f3475698/M375739.jpg`,
        `${mercedesUrl}/1jBWWiGuZSYpnbADCXX6Zb/a39969be7a200c5272e1676eea5fef58/M375744.jpg`,
        `${mercedesUrl}/3Z1f8oGzPgW6anG8DS4cG6/d6ae5e37cafe343ec095b894a2798ec0/M370506.jpg`,
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
                <b className="  text-lg md:text-4xl text-mercedes_green font-F1W">Mercedes</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#00A19C'} />
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] sm:text-[14px]'>
                <div className='w-10/12'>
                    <div>
                    The Mercedes-AMG F1 W14 E Performance is a Formula One race car designed and developed by Mercedes-AMG Petronas Formula One Team for the 2023 Formula One World Championship. Driven by seven-time World Champion Lewis Hamilton and rising star George Russell, the W14 embodies cutting-edge technology and engineering, continuing Mercedes&apos; legacy of innovation and competition in Formula One.                    </div>
                    <div>
                        Lets have a deeper look into the Mercedes W14:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={mercedesChasis} color={'#00A19C'} />
        </div>
    )
}
