import React from "react";
import style from "./SearchPage.module.css";

const SearchPage = () => {
   return (
      <div style={{ paddingTop: "5px" }}>
         <p className={style.aboutHeading}>About</p>
         <div className={style.searchContainer}>
            <div
               className={"d-flex justify-content-between align-items-center"}
            >
               <div className="d-flex">
                  <div className={style.searchBox}>
                     <input
                        className="border-0 w-100 h-100 mx-3"
                        type="text"
                        placeholder="Search"
                     />
                     <button className={style.crossButton}>
                        {" "}
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M18 6L6 18"
                              stroke="#08090A"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M6 6L18 18"
                              stroke="#08090A"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </button>
                  </div>
                  <div>
                     <button className={style.searchButton}>
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M21 21.0004L16.65 16.6504"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </button>
                  </div>
               </div>
               <div>
                  <button className={style.advancedSearch}>
                     Advance Search
                  </button>
               </div>
            </div>
            <div className={style.resultContainer}>
               <div className={style.webImage}>
                  <p className={style.web}>Web</p>
                  <p className={style.image}>Image</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SearchPage;
