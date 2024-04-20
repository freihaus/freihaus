import CustomIcon from "../icons/logo";

export default function Body() {
    return (
        <div className="flex flex-col md:flex-row  w-full justify-evenly items-center">

                <div className="mt-4">
                    <CustomIcon  size={300}/>
                </div>


                <div className=" max-w-[500px] justify-end border custom-border-cyan bg-white rounded-3xl p-8 m-4">
                    <h1 className="text-3xl text-center sm:text-5xl font-bold relative brown-gradient-text">
                        Unsere Mission: Ein neues Kapitel für unsere Lebensräume
                    </h1>
                    <p className="text-md text-center  font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 mt-4">
                        FREIHAUS steht an der Schwelle zu einer neuen Ära des Bauens
                        und Wohnens. Inspiriert von den historischen Freihäusern,
                        erweitern wir die traditionellen Grenzen von Wohn- und
                        Wirkungsräumen. Wir bieten innovative, maßgeschneiderte
                        Lösungen für Einzelpersonen, Familien, Gemeinschaften und
                        Organisationen. Unser ganzheitlicher Ansatz fördert nicht nur das
                        Wohlergehen jedes Einzelnen, sondern schafft Räume, die
                        Inspiration und Zusammenhalt bieten.
                    </p>
                </div>
        </div>
    );
};