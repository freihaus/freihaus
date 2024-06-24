"use client";

import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";
import Impressum from "@/components/Navbar/Footer";
import { useState } from "react";
import { sendMail } from "@/app/actions";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const response = await sendMail(name, email, message);
    console.log(response);
    if (response.message === "Email send successfully") {
      setName("");
      setEmail("");
      setMessage("");
    }
    setLoading(false);
  };
  return (
    <div className="w-full relative flex flex-col items-center justify-between z-20 h-screen">
      <div className="flex flex-col items-center mt-16">
        <BigHeadText text="FreiHaus" />
        <SmallHeadText text="Kontakt" />
        <div className="my-20">
          <form className="w-[400px] md:w-[600px] flex flex-col justify-center items-center bg-white border border-custom-cyan rounded-xl text-lg">
            <div className="w-full flex justify-center">
              <input
                className="w-[350px] md:w-[550px] p-2 border text-black placeholder:text-neutral-400 border-custom-cyan m-4 mx-4 bg-neutral-300 rounded-full"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
            <div className="w-full flex justify-center">
              <input
                className="w-[350px] md:w-[550px] p-2 border text-black placeholder:text-neutral-400 border-custom-cyan m-4 mx-4 bg-neutral-300 rounded-full"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <div className="w-full flex justify-center">
              <textarea
                className="w-[350px] md:w-[550px] p-2 border text-black placeholder:text-neutral-400 border-custom-cyan m-4 mx-4 bg-neutral-300 rounded-3xl resize-none"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nachricht"
                rows={8}
                required
              />
            </div>
            <div className="w-full flex">
              <div className="flex items-center mx-8 ">
                <input
                  className="mr-2"
                  type="checkbox"
                  name="agb"
                  required
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <p>
                  Ich akzeptiere die{" "}
                  <a href="/agb" target="_blank" className="underline">
                    Allgemeine Geschäftsbedingungen
                  </a>{" "}
                  und habe die{" "}
                  <a href="/datenschutz" target="_blank" className="underline">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen.
                </p>
              </div>
            </div>
            <button
              className="px-4 py-2 bg-custom-cyan text-custom-brown rounded-full m-2 hover:scale-110 transition ease-in-out duration-100 disabled:bg-neutral-600"
              type="submit"
              onClick={handleClick}
              disabled={!isChecked || !name || !email || !message}
            >
              {loading ? "Lädt..." : "Absenden"}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full rounded-3xl bg-white bg-opacity-40 m-4 p-4 flex justify-center items-center">
        <Impressum />
      </div>
    </div>
  );
}
