import RotatingCube from "@/components/3dhouse/3dhouse";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-5xl font-bold mt-20">3D House</h1>
      <RotatingCube />
      <h1>test</h1>
    </div>
  );
}
