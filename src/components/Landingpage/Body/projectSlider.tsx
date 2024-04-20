import TextCard from "@/components/TextCard";
import SmallHeadText from "../Header/SmallHeadText";
import ImageSlider from "@/components/ImageSlider";

type ProjectSliderProps = {
  headText: string;
  cardHeader: string;
  cardContent: string;
  imgSrcs: string[];
};

const ProjectSlider: React.FC<ProjectSliderProps> = ({ headText, cardHeader, cardContent, imgSrcs }) => {
  return (
    <div className="flex flex-col w-full justify-center  mt-10">
      <div className="mb-12 mt-8">
        <SmallHeadText text={headText} />
      </div>
      
      <div className="flex justify-evenly items-center flex-col lg:flex-row">
        <TextCard header={cardHeader} content={cardContent} />

      <ImageSlider images={imgSrcs} fadeDuration={1000} changeInterval={3000} />
      </div>
    </div>
  );
};

export default ProjectSlider;