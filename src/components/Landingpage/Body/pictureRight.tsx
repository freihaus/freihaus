import TextCard from "@/components/ui/Cards/TextCard";
import SmallHeadText from "../Header/SmallHeadText";

type PictureRightProps = {
  headText: string;
  cardHeader: string;
  cardContent: string;
  imgSrc: string;
};

const PictureRight: React.FC<PictureRightProps> = ({ headText, cardHeader, cardContent, imgSrc }) => {
  return (
    <div className="flex flex-col w-full justify-evenly mt-10">
      <div className="mb-12 mt-8 ">
        <SmallHeadText text={headText} />
      </div>
      <div className="flex justify-evenly items-center flex-col lg:flex-row h-full">
        <TextCard header={cardHeader} content={cardContent} />

        <div className="border custom-border-cyan rounded-3xl overflow-hidden m-4">
          <img 
            src={imgSrc} 
            className="w-[400px] md:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PictureRight;