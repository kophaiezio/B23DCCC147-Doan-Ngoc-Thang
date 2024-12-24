import NavBar from "../components/NavBar";
import ImageFrame from "../components/ImageFrame";
import info from '../../../public/icons/info.png'

export default function Home() {

    const col1 = [
        { title: "Nino Farina" , src: '/hallOfFame/2.jpg'},
        { title: "Kimi Raikkonen" , src: '/hallOfFame/9.jpg'},
        { title: "Niki lauda" , src: '/hallOfFame/6.jpg'},
    ]
    const col2 = [
        { title: "Aryton Senna" , src: '/hallOfFame/7.jpg'},
        { title: "Sebastain Vettel" , src: '/hallOfFame/4.jpg'},
        { title: "Lewis Hamilton" , src: '/hallOfFame/3.jpg'},
    ]
    const col3 = [
        { title: "Michael Schumacher" , src: '/hallOfFame/1.1.jpg'},
        { title: "Fernando Alonso" , src: '/hallOfFame/5.jpg'},
        { title: "Max Verstappen" , src: '/hallOfFame/8.jpg'},
    ]

    return (
        <div className="justify-around">
            <NavBar type={"hall"} />

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-14 pt-8">
                <div class="grid gap-6">
                    {col1.map((team, index) => (
                        <div key={index}><ImageFrame src={team.src} />
                        
                        <div className="flex justify-center items-center font-F1R text-[8px] sm:text-[12px] lg:text-[14px] mt-1">
                            <img src="/icons/info.png" alt='info' className="w-2 h-2 sm:w-3 sm:h-3" />
                            &emsp;{team.title}</div>
                        </div>
                    ))}
                </div>
                <div class="grid gap-6">
                    {col2.map((team, index) => (
                        <div key={index}><ImageFrame src={team.src} />
                        <div className="flex justify-center items-center font-F1R text-[8px] sm:text-[12px] lg:text-[14px] mt-1">
                            <img src="/icons/info.png" alt='info' className="w-2 h-2 sm:w-3 sm:h-3" />
                            &emsp;{team.title}</div>
                        </div>
                    ))}
                </div>
                <div class="grid gap-6">
                    {col3.map((team, index) => (
                        <div key={index}><ImageFrame src={team.src} />
                        <div className="flex justify-center items-center font-F1R text-[8px] sm:text-[12px] lg:text-[14px] mt-1">
                            <img src="/icons/info.png" alt='info' className="w-2 h-2 sm:w-3 sm:h-3" />
                            &emsp;{team.title}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}


