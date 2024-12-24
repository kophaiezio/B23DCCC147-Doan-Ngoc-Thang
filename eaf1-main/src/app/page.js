import Image from "next/image";
import NavBar from "./components/NavBar";
import ImageFrame from "./components/ImageFrame";
import { FAQ } from '../assets/home'


export default function Home() {

  return (
    <div className="justify-around">
      <NavBar type={"home"} />
      <div className="flex flex-col justify-around items-center font-F1R h-fit">
        <div className="grid items-center justify-items-center p-8 font-F1R border-box text-[8px] sm:text-[14px] max-w-9/12">
          <main className="flex flex-col gap-4 md:gap-8 row-start-2 items-start md:items-center max-w-9/12">
            <div className="flex flex-row text-sm sm:text-3xl md:text-4xl text-wrap w-full px-4">
              <b className="text-site_text font-F1W">F1&nbsp;</b>
              <p>Everything about F1</p>
            </div>
            
            <div>
              {FAQ.map((value, index) =>
                <div class="gap-8 items-center pb-4 px-4 mx-auto max-w-screen-2xl xl:gap-16 lg:grid lg:grid-cols-2 lg:px-6 lg:pb-8" key={index}>
                  {index % 2 !== 0 ? (<div class="hidden lg:block flex justify-center items-center"><ImageFrame src={value.src} /></div>) : <></>}
                  <div class="mt-4 md:mt-0 text-[8px] xs:text-[8px] sm:text-[14px]">
                    <h2 class="mb-4 text-[12px] md:text-2xl text-site_text font-F1W">{value.question}</h2>
                    <p class="flex flex-col gap-4 mb-6">
                      {value.answers.map((val, index) => {
                        if (val.type == 'text') {
                          return (
                            <div key={index}>{val.content}</div>
                          )
                        }
                        else if (val.type == 'array') {
                          return (
                            <ol key={index} className="list-decimal pl-10">
                              {val.content.map((list, index) =>
                                <li key={index}>{list}</li>
                              )}
                            </ol>
                          )
                        }
                        else if (val.type == 'points') {
                          return (
                            <div key={index}><strong>{val.content.bold}</strong>{val.content.light}</div>
                          )
                        }
                      })}

                    </p>
                  </div>
                  {index % 2 == 0 ? (<div class="hidden lg:block flex justify-center items-center"><ImageFrame src={value.src} /></div>) : <></>}
                  <div class="block lg:hidden flex justify-center items-center"><ImageFrame src={value.src} /></div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <footer className="row-start-3 py-8 flex gap-3 md:gap-6 flex-wrap items-center justify-center font-F1R text-[8px] xs:text-[8px] sm:text-[14px] ">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          FIA
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Races
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.formula1.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          F1 official page →
        </a>
      </footer>
    </div>
  );
}
