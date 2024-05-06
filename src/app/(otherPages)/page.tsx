import Header from "@/components/Landingpage/Header/Header";
import Body from "@/components/Landingpage/Body/Body";
import Impressum from "@/components/Navbar/Footer";



export default function Home() {
  return (
    <div className="w-full relative flex flex-col items-center z-20 h-screen">
      <Header />
      <Body />
      <div className="w-full rounded-3xl bg-white bg-opacity-40 m-4 p-4 flex justify-center items-center">
        <Impressum />
      </div>
      
    </div>
  );
}
