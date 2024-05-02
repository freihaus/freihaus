import TextCard from "@/components/ui/Cards/TextCard";
import SmallHeadText from "../Header/SmallHeadText";
import Image from "next/image";

type PictureRightProps = {
  headText: string;
  cardHeader: string;
  cardContent: string;
  imgSrc: string;
};

const PictureRight: React.FC<PictureRightProps> = ({
  headText,
  cardHeader,
  cardContent,
  imgSrc,
}) => {
  return (
    <div className="flex flex-col w-full justify-evenly mt-10 items-center">
      <div className="mb-12 mt-8 max-w-[400px] bg-white border border-custom-cyan rounded-3xl shadow-2xl">
        <SmallHeadText text={headText} />
      </div>
      <div className="flex justify-evenly items-center flex-col lg:flex-row h-full">
        <TextCard header={cardHeader} content={cardContent} />

        <div className="border custom-border-cyan rounded-3xl overflow-hidden m-4 shadow-2xl">
          <Image src={imgSrc} alt="Picture" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default PictureRight;
