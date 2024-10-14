import React from "react";
import Link from "next/link";
import Style from "./header.module.css";

const header = () => {
  return (
    <div>
      <div className={Style.nav}>
        <Link href="http://localhost:3000/" className={Style.lnk}>
          Home
        </Link>
        <Link href="about" className={Style.lnk}>
          About
        </Link>
        <Link href="services" className={Style.lnk}>
          Services
        </Link>
        <Link href="contact" className={Style.lnk}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default header;
