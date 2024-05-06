import ContactDataField from "@/components/ContactPage/ContactDataField/ContactDataField";
import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";
import Impressum from "@/components/Navbar/Footer";

export default function Contact() {
  return (
    <div className="w-full relative flex flex-col items-center justify-between z-20 h-screen">
      <div className="flex flex-col items-center mt-16">
        <BigHeadText text="FreiHaus" />
        <SmallHeadText text="Kontakt" />
        <div className="mt-10">
          <ContactDataField />
        </div>
      </div>
      <div className="w-full rounded-3xl bg-white bg-opacity-40 m-4 p-4 flex justify-center items-center">
        <Impressum />
      </div>
    </div>
  );
}
