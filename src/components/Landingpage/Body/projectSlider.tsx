import TextCard from "@/components/ui/Cards/TextCard";
import SmallHeadText from "../Header/SmallHeadText";
import ImageSlider from "@/components/ui/ImageSlider";
import Link from "next/link";

type ProjectSliderProps = {
  headText: string;
  cardHeader: string;
  cardContent: string;
  imgSrcs: string[];
};

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  headText,
  cardHeader,
  cardContent,
  imgSrcs,
}) => {
  return (
    <div className="flex flex-col w-full justify-center  mt-10 items-center">
      <div className="mb-12 mt-8 max-w-[400px] bg-white border border-custom-cyan rounded-3xl shadow-2xl">
        <SmallHeadText text={headText} />
      </div>

      <div className="flex justify-evenly items-center flex-col lg:flex-row">
        <Link href="/projekte">
          <ImageSlider
            images={imgSrcs}
            fadeDuration={1000}
            changeInterval={3000}
          />
        </Link>
        <Link
          href="/projekte"
          className="text-3xl font-bold relative text-custom-brown px-4 py-2 rounded-xl bg-custom-cyan my-4 flex md:hidden"
        >
          Projekte
        </Link>

        <TextCard header={cardHeader} content={cardContent} />
      </div>
      <div className="w-full flex justify-center items-center">
        <Link
          href="/projekte"
          className="text-3xl font-bold relative text-custom-brown px-4 py-2 rounded-xl bg-custom-cyan my-4 hidden md:flex w-52 text-center justify-center animate-bounce mt-12 shadow-2xl"
        >
          Zu den Projekten
        </Link>
      </div>
    </div>
  );
};

export default ProjectSlider;
