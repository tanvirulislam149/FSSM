import React from "react";
import Header from "./Header/Header";
import style from "./ID13.module.css";

const ID13 = () => {
   return (
      <div>
         <Header></Header>
         <div className={style.container}>
            <div className={style.item}>
               <p className={style.circle}>1</p>
               <p className={style.spread}>Spread The World</p>
               <p style={{ margin: "0 35px" }} className={style.connect}>
                  Get Connected and follow our Twitter page to spread the word
               </p>
               <button className={style.button}>Click Here</button>
            </div>
            <div className={style.item}>
               <p className={style.circle}>2</p>
               <p className={style.spread}>Connect with FSSMAlliance</p>
               <p style={{ margin: "0 17px" }} className={style.connect}>
                  Interested in becoming an alliance member and contribute to
                  the FSM sector?
               </p>
               <button className={style.button}>Get in touch</button>
            </div>
            <div className={style.item}>
               <p className={style.circle}>3</p>
               <p className={style.spread}>Know more about FSM</p>
               <p style={{ margin: "0 47px" }} className={style.connect}>
                  Need more information about FSM?
                  <p style={{ marginBottom: 0 }}>Write to us!</p>
               </p>
               <button className={style.button}>Get in touch</button>
            </div>
         </div>
      </div>
   );
};

export default ID13;
