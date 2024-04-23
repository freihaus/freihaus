import React from "react";
import { contactData } from "./ContactData";

const ContactDataField: React.FC = () => {
  const data = contactData[0];
  const { name, ...details } = data;

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      {Object.values(details).map((detail, index) => (
        <p className="text-lg" key={index}>
          {detail}
        </p>
      ))}
    </div>
  );
};

export default ContactDataField;
