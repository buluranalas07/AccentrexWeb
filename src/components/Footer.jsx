import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white flex justify-center p-2">
      © {currentYear} Accentrex. All rights reserved.
    </div>
  );
};

export default Footer;
