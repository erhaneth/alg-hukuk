import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.module.css";

function Whatsapp() {
  const myNumber = "+905355022106";
  return (
    <div className="whatsapp-icon">
      {/* <span>Haydi konusalim</span> */}
      <a
        href={`https://wa.me/${myNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={64} color="#25D366" />
      </a>
    </div>
  );
}

export default Whatsapp;
