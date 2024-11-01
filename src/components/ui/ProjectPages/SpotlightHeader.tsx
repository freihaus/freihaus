import Impressum from "@/components/Navbar/Footer";
import { CallToAction } from "./CallToAction";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./text-generate-effect";
import Image from "next/image";
import HouseModel from "./house-model";
import Link from "next/link";

type SpotlightHeaderProps = {
  images: string[];
  header: string;
  claim: string;
  threeDModel?: boolean;
  cert?: string;
  description: string;
  PartOneH: string;
  PartOneD: string;
  PartTwoH: string;
  PartTwoD: string;
  PartThreeH?: string;
  PartThreeD?: string;
  optionalProp1?: string;
  optionalProp2?: string;
  optionalProp3?: string;
  optionalProp4?: string;
  optionalProp5?: string;
  optionalProp6?: string;
  optionalProp7?: string;
  optionalProp8?: string;
};

export function SpotlightHeader({
  header,
  claim,
  threeDModel,
  cert,
  description,
  PartOneH,
  PartOneD,
  PartTwoH,
  PartTwoD,
  PartThreeH,
  PartThreeD,
  images,
  optionalProp1,
  optionalProp2,
  optionalProp3,
  optionalProp4,
  optionalProp5,
  optionalProp6,
  optionalProp7,
  optionalProp8,
}: SpotlightHeaderProps & {
  optionalProp1?: string;
  optionalProp2?: string;
  optionalProp3?: string;
  optionalProp4?: string;
  optionalProp5?: string;
  optionalProp6?: string;
  optionalProp7?: string;
  optionalProp8?: string;
}) {
  return (
    <div className="w-full rounded-md flex bg-black antialiased bg-grid-white/[0.06] relative overflow-hidden">
      <div className="w-full mt-52">
        <Spotlight
          className="-top-72 left-0 md:left-60 md:-top-40"
          fill="white"
        />
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 z-30">
            {header}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 z-30 mb-6">
            {claim}
          </h2>
          <div className="flex justify-center mb-20">
          <p className="mt-4 font-normal text-2xl text-neutral-100 w-full text-center">
            {description}
          </p>
          </div>
          {cert && (
            <div className="w-full flex justify-center">
          <Link
            className="mt-4 p-4 border rounded-xl text-center text-white text-xl underline hover:scale-105"
            href={cert}
            target="_blank"
          >Zum Zertifikat</Link>
          </div>
          )}
        </div>


        {/* Optional Header */}

        {threeDModel && (
          <div className="w-full flex justify-center">
            <HouseModel />
          </div>
        )}
        
        

        {/* Part One */}
        <div className="w-full mt-0 md:mt-14">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl xl:ml-10 font-bold px-12 py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center md:text-start z-30">
              {PartOneH}
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center relative">
              <div className="w-[380px] md:w-[750px]  md:mx-4 md:ml-6 xl:ml-[5.5rem] flex  text-center md:text-start relative z-30">
                <TextGenerateEffect words={PartOneD} />
              </div>
              <div className="w-full hidden md:flex justify-end absolute opacity-30 z-20">
                <Image
                  src={images[0]}
                  alt="bgImg"
                  width={750}
                  height={800}
                  placeholder="empty"
                  className="h-[600px] object-cover py-10 mb-[4.5rem]"
                  loading="eager"
                />
              </div>

              <div className="w-full flex md:hidden justify-center mt-4">
                <Image
                  src={images[0]}
                  alt="bgImg2"
                  width={500}
                  height={500}
                  placeholder="empty"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Part Two */}
        <div className="flex mt-14 md:mt-32 text-center md:text-right w-full">
          <div className="w-full flex flex-col items-center md:items-end">
            <h1 className="text-4xl md:text-5xl xl:mr-10 font-bold px-10 py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 z-30">
              {PartTwoH}
            </h1>
            <div className="w-[380px] md:w-[750px]  mx-4 lg:mr-10 xl:mr-20">
              <TextGenerateEffect words={PartTwoD} />
            </div>
          </div>
        </div>

        {/* Part Three */}
        {PartThreeH && PartThreeD && (
        <div className="w-full mt-12 md:mt-32 md:mb-40">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl xl:ml-10 font-bold px-12 py-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50 text-center md:text-start z-30">
              {PartThreeH}
            </h1>
            <div className="w-full flex md:flex-row flex-col justify-between items-center">
              <div className="w-[380px] md:w-[750px]  md:mx-4 md:ml-6 xl:ml-[5.5rem] flex text-center md:text-start">
                <TextGenerateEffect words={PartThreeD} />
              </div>
              <div className="w-full hidden md:flex opacity-25 absolute justify-end">
                <Image
                  src={images[1]}
                  alt="bgImg"
                  width={750}
                  height={800}
                  placeholder="empty"
                  className="h-[600px] object-cover  py-10 mb-14"
                  loading="eager"
                />
              </div>

              <div className="w-full flex md:hidden justify-center mt-4">
                <Image
                  src={images[1]}
                  alt="bgImg2"
                  width={500}
                  height={500}
                  placeholder="empty"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Optional One */}
        {optionalProp1 && optionalProp2 && (
          <div className="flex mt-12 md:mt-32 text-center md:text-right w-full">
            <div className="w-full flex flex-col items-center md:items-end">
              <h1 className="text-4xl md:text-5xl xl:mr-10 font-bold px-10 py-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50 z-30">
                {optionalProp1}
              </h1>
              <div className="w-[380px] md:w-[750px]  mx-4 lg:mr-10 xl:mr-20">
                <TextGenerateEffect words={optionalProp2} />
              </div>
            </div>
          </div>
        )}

        {/* Optional Two*/}
        {optionalProp3 && optionalProp4 && (
          <div className="w-full mt-12 md:mt-32 md:mb-52">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl xl:ml-10 font-bold px-12 py-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50 text-center md:text-start z-30">
                {optionalProp3}
              </h1>
              <div className="w-full flex md:flex-row flex-col justify-between items-center">
                <div className="w-[380px] md:w-[750px]  md:mx-4 md:ml-6 xl:ml-[5.5rem] flex text-center md:text-start">
                  <TextGenerateEffect words={optionalProp4} />
                </div>
                <div className="w-full hidden md:flex opacity-30 absolute justify-end ">
                  <Image
                    src={images[2]}
                    alt="bgImg"
                    width={750}
                    height={800}
                    placeholder="empty"
                    className="h-[600px] object-cover  py-10 mb-14"
                    loading="eager"
                  />
                </div>

                <div className="w-full flex md:hidden justify-center mt-4">
                  <Image
                    src={images[2]}
                    alt="bgImg2"
                    width={500}
                    height={500}
                    placeholder="empty"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Optional Three */}
        {optionalProp5 && optionalProp6 && (
          <div className="flex mt-12 md:mt-32 text-center md:text-right w-full">
            <div className="w-full flex flex-col items-center md:items-end">
              <h1 className="text-4xl md:text-5xl xl:mr-10 font-bold px-10 py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 bg-opacity-50 z-30">
                {optionalProp5}
              </h1>
              <div className="w-[380px] md:w-[750px]  mx-4 lg:mr-10 xl:mr-20">
                <TextGenerateEffect words={optionalProp6} />
              </div>
            </div>
          </div>
        )}

        {/* Optional Four*/}
        {optionalProp7 && optionalProp8 && (
          <div className="w-full mt-12 md:mt-32 md:mb-20">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl xl:ml-10 font-bold px-12 py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 bg-opacity-50 text-center md:text-start z-30">
                {optionalProp7}
              </h1>
              <div className="w-full flex md:flex-row flex-col justify-between items-center">
                <div className="w-[380px] md:w-[750px]  md:mx-4 md:ml-6 xl:ml-[5.5rem] flex text-center md:text-start">
                  <TextGenerateEffect words={optionalProp8} />
                </div>
                <div className="w-full hidden md:flex opacity-30 absolute justify-end ">
                  <Image
                    src={images[3]}
                    alt="bgImg"
                    width={750}
                    height={800}
                    placeholder="empty"
                    className="h-[600px] object-cover  py-10 mb-14"
                    loading="eager"
                  />
                </div>

                <div className="w-full flex md:hidden justify-center mt-4">
                  <Image
                    src={images[3]}
                    alt="bgImg2"
                    width={500}
                    height={500}
                    placeholder="empty"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex justify-center mt-18">
          <div className="max-w-[1000px] text-center mx-20 mt-12 relative z-10">
            <CallToAction />
          </div>
        </div>
        <div className="text-white mt-24 mb-12 w-full relative z-10">
          <Impressum />
        </div>
      </div>
    </div>
  );
}
