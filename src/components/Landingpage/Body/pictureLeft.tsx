import TextCard from "@/components/ui/Cards/TextCard";
import SmallHeadText from "../Header/SmallHeadText";
import Image from "next/image";

type PictureLeftProps = {
  headText: string;
  cardHeader: string;
  cardContent: string;
  imgSrc: string;
};

const PictureLeft: React.FC<PictureLeftProps> = ({
  headText,
  cardHeader,
  cardContent,
  imgSrc,
}) => {
  return (
    <div className="flex flex-col w-full justify-evenly  mt-10 items-center">
      <div className="mb-12 mt-8 bg-white border border-custom-cyan rounded-3xl max-w-[400px] shadow-2xl">
        <SmallHeadText text={headText} />
      </div>
      <div className="flex justify-evenly items-center flex-col lg:flex-row h-full">
        <div className="border custom-border-cyan rounded-3xl overflow-hidden m-4 hidden md:flex shadow-2xl">
          <Image
            src={imgSrc}
            alt="Picture"
            width={600}
            height={400}
            loading="eager"
          />
        </div>
        <TextCard header={cardHeader} content={cardContent} />
      </div>
      <div className="border custom-border-cyan rounded-3xl overflow-hidden m-4 flex md:hidden shadow-2xl">
        <Image
          src={imgSrc}
          alt="Picture"
          width={600}
          height={400}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default PictureLeft;
