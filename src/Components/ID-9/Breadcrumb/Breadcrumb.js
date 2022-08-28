import React from "react";
import style from "./Breadcrumb.module.css";

const Breadcrumb = () => {
   return (
      <div>
         <div
            style={{
               marginTop: "106px",
               marginRight: "62px",
               marginLeft: "396px",
               marginBottom: "21px",
            }}
         >
            <nav className={style.breadcrumbStyle} aria-label="breadcrumb">
               <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                     <a className={style.breadcrumbColor} href="#">
                        Home
                     </a>
                  </li>
                  <li class="breadcrumb-item">
                     <a className={style.breadcrumbColor} href="#">
                        Technical consultants/Agencies
                     </a>
                  </li>
                  <li class="breadcrumb-item">
                     <a className={style.breadcrumbColor} href="#">
                        Knowledge & learning from existing projects
                     </a>
                  </li>
               </ol>
            </nav>
         </div>
      </div>
   );
};

export default Breadcrumb;
