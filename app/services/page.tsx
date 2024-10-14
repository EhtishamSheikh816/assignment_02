import React from "react";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";
import style from "./services.module.css";

const Services = () => {
  return (
    <div>
      <Header />

      <div className={style.main}>
        <h1 className={style.heading}>This is a Services page</h1>
        <p className={style.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
          minima, obcaecati mollitia quisquam temporibus ipsam, aliquam sit vero
          nostrum dicta veritatis nisi consequuntur dolorem a animi quos
          deleniti esse distinctio similique labore quis sed alias
          reprehenderit! Mollitia quam voluptates voluptate dignissimos quasi
          sunt beatae, hic porro veniam omnis voluptas sed! Laboriosam
          temporibus molestias eos cumque est eius, corporis beatae delectus et!
          Odit earum veritatis, vero omnis doloremque nesciunt consequuntur
          rerum ducimus nostrum architecto eligendi cupiditate iure non veniam
          tempora reprehenderit magnam dolores. Vitae, earum alias vero corrupti
          officia neque ut modi voluptatem mollitia ea odio quae rem reiciendis
          reprehenderit.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
