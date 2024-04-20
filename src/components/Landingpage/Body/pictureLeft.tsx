import TextCard from "@/components/TextCard";
import SmallHeadText from "../Header/SmallHeadText";

type PictureLeftProps = {
  headText: string;
  cardHeader: string;
  cardContent: string;
  imgSrc: string;
};

const PictureLeft: React.FC<PictureLeftProps> = ({ headText, cardHeader, cardContent, imgSrc }) => {
  return (
    <div className="flex flex-col w-full justify-center  mt-10">
      <div className="mb-12 mt-8">
        <SmallHeadText text={headText} />
      </div>
      <div className="flex justify-evenly items-center flex-col lg:flex-row">
      <div className="border custom-border-cyan rounded-3xl overflow-hidden m-4">
          <img 
            src={imgSrc} 
            width={500}
          />
        </div>
        <TextCard header={cardHeader} content={cardContent} />
      </div>
    </div>
  );
};

export default PictureLeft;