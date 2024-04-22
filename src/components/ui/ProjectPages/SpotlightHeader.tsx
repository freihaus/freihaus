import { CallToAction } from "./CallToAction";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./text-generate-effect";
import Image from "next/image";


type SpotlightHeaderProps = {
    images: string[];
    header: string;
    description: string;
    PartOneH: string;
    PartOneD: string;
    PartTwoH: string;
    PartTwoD: string;
    PartThreeH: string;
    PartThreeD: string;
};

export function SpotlightHeader({ header, description, PartOneH, PartOneD, PartTwoH, PartTwoD, PartThreeH, PartThreeD, images }: SpotlightHeaderProps) {
  return (
    <div className=" w-full rounded-md flex bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

        <div className="w-full mt-52">
            <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {header}
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                {description}
            </p>
        </div>

        {/* Part One */}
        <div className="w-full mt-10">
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl xl:ml-40 font-bold p-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center md:text-start">
                    {PartOneH}
                </h1>
                <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
                    
                    <div className="w-[380px] md:w-[750px]  md:mx-4 lg:ml-20 xl:ml-52 flex  text-center md:text-start">
                        <TextGenerateEffect words={PartOneD} />
                    </div>
                    <div className="w-full hidden md:flex opacity-10 absolute justify-end ">
                        <Image 
                            src={images[0]} 
                            alt="bgImg" 
                            width={800}
                            height={800}
                            placeholder="empty"
                            />
                    </div>

                    <div className="w-full flex md:hidden justify-center mt-4">
                        <Image 
                            src={images[0]} 
                            alt="bgImg2" 
                            width={500}
                            height={500}
                            placeholder="empty"
                            />
                    </div>
                </div>
            </div>
        </div>

        {/* Part Two */}
        <div className="flex mt-12 md:mt-32 text-center md:text-right w-full">
            <div className="w-full flex flex-col items-center md:items-end">
                <h1 className="text-4xl md:text-5xl xl:mr-40 font-bold p-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {PartTwoH}
                </h1>
                <div className="w-[380px] md:w-[750px]  mx-4 lg:mr-20 xl:mr-20">
                    <TextGenerateEffect words={PartTwoD} />
                </div>
            </div>
        </div>

        {/* Part Three */}
        <div className="w-full mt-12 md:mt-32 md:mb-40">
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl xl:ml-40 font-bold p-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center md:text-start">
                    {PartThreeH}
                </h1>
                <div className="w-full flex md:flex-row flex-col justify-between items-center">
                    
                    <div className="w-[380px] md:w-[750px]  md:mx-4 lg:ml-20 xl:ml-52 flex text-center md:text-start">
                        <TextGenerateEffect words={PartThreeD} />
                    </div>
                    <div className="w-full hidden md:flex opacity-10 absolute justify-end ">
                        <Image 
                            src={images[0]} 
                            alt="bgImg" 
                            width={800}
                            height={800}
                            placeholder="empty"
                            />
                    </div>

                    <div className="w-full flex md:hidden justify-center mt-4">
                        <Image 
                            src={images[0]} 
                            alt="bgImg2" 
                            width={500}
                            height={500}
                            placeholder="empty"
                            />
                    </div>
                </div>
            </div>
        </div>
      <div className="w-full flex justify-center items-center md:mt-26">
        <div className="max-w-[1000px] text-center mx-20">
            <CallToAction />
        </div>
        
      </div>

      </div>
    </div>
  );
}
