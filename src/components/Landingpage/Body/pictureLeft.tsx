import TextCard from "@/components/ui/Cards/TextCard";
import SmallHeadText from "../Header/SmallHeadText";

type PictureLeftProps = {
  headText: string;
  cardHeader: string;
  cardContent: string;
  imgSrc: string;
};

const PictureLeft: React.FC<PictureLeftProps> = ({ headText, cardHeader, cardContent, imgSrc }) => {
  return (
    <div className="flex flex-col w-full justify-evenly  mt-10">
      <div className="mb-12 mt-8">
        <SmallHeadText text={headText} />
      </div>
      <div className="flex justify-evenly items-center flex-col lg:flex-row h-full">
      <div className="border custom-border-cyan rounded-3xl overflow-hidden m-4 hidden md:flex">
          <img 
            src={imgSrc} 
            className="w-[400px] md:w-[600px]"
          />
        </div>
        <TextCard header={cardHeader} content={cardContent} />
      </div>
      <div className="border custom-border-cyan rounded-3xl overflow-hidden m-4 flex md:hidden">
          <img 
            src={imgSrc} 
            className="w-[400px] md:w-[600px]"
          />
        </div>
    </div>
  );
};

export default PictureLeft;