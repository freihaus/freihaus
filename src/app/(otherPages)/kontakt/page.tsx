'use client'

import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";
import { useState } from "react";



export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fehler beim Senden des Formulars', error);
    }
  };
  
  return (
    <div className="w-full relative flex flex-col items-center justify-between z-20 h-screen">
      <div className="flex flex-col items-center mt-16">
        <BigHeadText text="FreiHaus" />
        <SmallHeadText text="Kontakt" />
        <div className="my-20">
          <div className="w-[400px] md:w-[600px] flex flex-col justify-center items-center bg-white border border-custom-cyan rounded-xl text-lg">
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
                className="w-[350px] md:w-[550px] p-2 border text-black placeholder:text-neutral-400 border-custom-cyan m-4 mx-4 bg-neutral-300 rounded-full"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
              />
            </div>
            <div className="w-full flex justify-center">
              <button onClick={handleClick} className="...">
                Senden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}