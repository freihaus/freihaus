'use client'

import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";
import Impressum from "@/components/Navbar/Footer";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async (event: any) => {
    event.preventDefault();
    console.log(name, email, message);
    try {
      const response = await fetch("https://zw3nnspqw6.execute-api.eu-central-1.amazonaws.com/dev/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Success:", responseData);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
                />
                <p>Ich akzeptiere die Allgemeine Geschäftsbedingungen und habe die Datenschutzerklärung gelesen.</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-custom-cyan text-custom-brown rounded-full m-2 hover:scale-110 transition ease-in-out duration-100" type="submit" onClick={handleClick}>Senden</button>
          </form>
        </div>
      </div>
      <div className="w-full rounded-3xl bg-white bg-opacity-40 m-4 p-4 flex justify-center items-center">
        <Impressum />
      </div>
    </div>
  );
}
