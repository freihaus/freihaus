type BigHeadTextProps = {
  text: string;
};

const BigHeadText: React.FC<BigHeadTextProps> = ({ text }) => {
  return (
    <p className="text-6xl text-center sm:text-8xl font-bold relative bg-clip-text brown-gradient-text pt-8">
      {text}
    </p>
  );
};

export default BigHeadText;