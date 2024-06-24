type TextCardProps = {
  header: string;
  content: string;
};

const TextCard: React.FC<TextCardProps> = ({ header, content }) => {
  return (
    <div className="flex flex-col max-w-[400px] md:max-w-[500px] lg:max-w-[600px] justify-evenly border custom-border-cyan bg-white rounded-3xl p-8 m-4 shadow-2xl">
      <h1 className="text-3xl text-center md:text-5xl lg:text-6xl font-bold relative brown-gradient-text">
        {header}
      </h1>
      <div className="flex justify-center items-center mt-4">
        <p className="text-md md:text-lg text-center font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 mt-4">
          {content}
        </p>
      </div>
    </div>
  );
};

export default TextCard;
