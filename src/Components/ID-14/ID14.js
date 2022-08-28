import React from "react";
import style from "./ID14.module.css";

const ID14 = () => {
   return (
      <div style={{ backgroundColor: "white" }}>
         <div className={style.container}>
            <p className={style.header}>Admin Sign in</p>
            <div className={style.inputContainer}>
               <input
                  className={style.emailField}
                  type="text"
                  placeholder="Email"
               />{" "}
               <br />
               <div className={style.passwordContainer}>
                  <input
                     className={style.passwordField}
                     type="password"
                     placeholder="Password"
                  />
                  <button className={style.showPassword}>
                     <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <g clip-path="url(#clip0_2369_1141)">
                           <path
                              d="M9.76385 5.72255C12.6728 5.72255 15.267 7.37921 16.5334 10.0003C15.267 12.6214 12.6805 14.2781 9.76385 14.2781C6.84724 14.2781 4.26067 12.6214 2.99425 10.0003C4.26067 7.37921 6.85492 5.72255 9.76385 5.72255ZM9.76385 4.16699C5.92621 4.16699 2.64887 6.58588 1.32104 10.0003C2.64887 13.4148 5.92621 15.8337 9.76385 15.8337C13.6015 15.8337 16.8788 13.4148 18.2066 10.0003C16.8788 6.58588 13.6015 4.16699 9.76385 4.16699ZM9.76385 8.05588C10.823 8.05588 11.6827 8.92699 11.6827 10.0003C11.6827 11.0737 10.823 11.9448 9.76385 11.9448C8.70466 11.9448 7.84503 11.0737 7.84503 10.0003C7.84503 8.92699 8.70466 8.05588 9.76385 8.05588ZM9.76385 6.50033C7.86038 6.50033 6.30997 8.07144 6.30997 10.0003C6.30997 11.9292 7.86038 13.5003 9.76385 13.5003C11.6673 13.5003 13.2177 11.9292 13.2177 10.0003C13.2177 8.07144 11.6673 6.50033 9.76385 6.50033Z"
                              fill="#8E8E8E"
                           />
                        </g>
                        <defs>
                           <clipPath id="clip0_2369_1141">
                              <rect
                                 width="18.4207"
                                 height="18.6667"
                                 fill="white"
                                 transform="translate(0.553497 0.666992)"
                              />
                           </clipPath>
                        </defs>
                     </svg>
                  </button>
               </div>
               <div className="d-flex justify-content-between align-items-center">
                  <div class="form-check">
                     <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                     />
                     <label
                        class={`form-check-label ${style.checkbox}`}
                        for="flexCheckDefault"
                     >
                        Remember me
                     </label>
                  </div>
                  <div>
                     <button className={style.forgotPass}>
                        Forgot Password?
                     </button>
                  </div>
               </div>
               <div>
                  <button className={style.login}>Login</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ID14;
