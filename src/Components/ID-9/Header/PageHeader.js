import React from "react";
import style from "./PageHeader.module.css";

const PageHeader = () => {
   return (
      <div style={{ paddingTop: "5px" }}>
         <p className={style.technicalHeading}>
            Technical consultants/Agencies
         </p>
      </div>
   );
};

export default PageHeader;
