import React from "react";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Style from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />

      <div className={Style.main}>
        <h1 className={Style.heading}>This is a Home Page</h1>
        <p className={Style.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa,
          qui voluptatum, consequatur eos in ipsam nihil, fuga quis totam sit
          distinctio facere quam dolorum sequi dolorem ab quidem aliquid optio
          aperiam accusamus temporibus nisi dolore ratione? Maiores aspernatur
          nulla aliquam eligendi, corporis repellendus quasi impedit repudiandae
          maxime nesciunt dicta rem excepturi laboriosam molestiae animi
          voluptatibus rerum. Sequi et dolore quas ex a natus, dicta dolor
          reprehenderit fugit odit magni officiis maiores libero suscipit
          expedita iste deleniti nihil? Facilis, ad debitis minus expedita
          dignissimos earum. Neque, harum, consequatur maiores, non error magni
          velit aliquam praesentium quaerat nulla commodi est id.
        </p>
      </div>

      <Footer />
    </div>
  );
}
