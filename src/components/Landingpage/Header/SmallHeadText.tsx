type SmallHeadTextProps = {
    text: string;
};

const SmallHeadText: React.FC<SmallHeadTextProps> = ({ text }) => {
    return (
        <p className="text-4xl sm:text-5xl font-bold relative bg-clip-text brown-gradient-text">
            {text}
        </p>
    );
};

export default SmallHeadText;