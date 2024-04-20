type TextCardProps = {
  header: string;
  content: string;
};

const TextCard: React.FC<TextCardProps> = ({ header, content }) => {
  return (
    <div className="flex flex-col max-w-[500px] justify-evenly border custom-border-cyan bg-white rounded-3xl p-8 m-4">
      <h1 className="text-3xl text-center sm:text-5xl font-bold relative brown-gradient-text">
        {header}
      </h1>
      <div className="flex justify-center items-center">
        <p className="text-md text-center font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 mt-4">
          {content}
        </p>
      </div>
    </div>
  );
};

export default TextCard;