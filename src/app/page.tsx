import Body from "@/components/Landingpage/Body";
import Header from "@/components/Landingpage/Header";

export default function Home() {
  return (
      <div className="w-full relative flex flex-col items-center z-50 h-screen">
        <Header />
        <Body />
      </div>
  );
}