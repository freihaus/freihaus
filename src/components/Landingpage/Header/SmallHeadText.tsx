type SmallHeadTextProps = {
  text: string;
};

const SmallHeadText: React.FC<SmallHeadTextProps> = ({ text }) => {
  return (
    <p className="text-4xl text-center  sm:text-5xl font-bold relative bg-clip-text brown-gradient-text p-2">
      {text}
    </p>
  );
};

export default SmallHeadText;
