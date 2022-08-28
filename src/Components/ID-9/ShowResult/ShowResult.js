import React from "react";
import style from "./ShowResult.module.css";

const ShowResult = () => {
   return (
      <div>
         <div
            style={{
               marginTop: "14px",
               marginRight: "62px",
               marginLeft: "396px",
               marginBottom: "111px",
            }}
         >
            <p
               style={{
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "13px",
                  fontFamily: "Roboto",
                  fontSize: "11px",
                  color: "#8E8E8E",
                  margin: 0,
               }}
            >
               Showing 0-20 results of 2 results
            </p>
         </div>
      </div>
   );
};

export default ShowResult;
