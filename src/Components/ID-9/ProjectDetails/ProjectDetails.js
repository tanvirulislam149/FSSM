import React, { useState } from "react";
import style from "./ProjectDetails.module.css";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const ProjectDetails = () => {
   const [show, setShow] = useState(false);

   function CustomToggle({ children, eventKey }) {
      const decoratedOnClick = useAccordionButton(eventKey, () => {
         if (show === true) {
            setShow(false);
         } else {
            setShow(true);
         }
      });

      return (
         <button
            type="button"
            className={style.showMore}
            onClick={decoratedOnClick}
         >
            {children}
         </button>
      );
   }

   return (
      <div
         style={{
            marginRight: "62px",
            marginLeft: "396px",
            marginBottom: "12px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "14px",
            paddingRight: "26px",
            backgroundColor: "white",
            borderRadius: "11px",
         }}
      >
         <div className="d-flex ">
            {/* img */}
            <div className={style.image}></div>
            {/* text  */}
            <div style={{ width: "90%" }}>
               <div className="d-flex justify-content-between">
                  <div>
                     <p className={style.name}>BMGF MLE Wireframe for FSSM</p>
                  </div>
                  <div>
                     <button className={style.viewButton}>View Document</button>
                  </div>
               </div>
               <hr className="m-0" />
               <p className={style.detailsText}>
                  Effectiveness of investments in sanitary improvements can be
                  further enhanced through coordination and exchange between
                  stakeholders. This can be facilitated through implementation
                  of a homogenized Monitoring, Learning and Evaluation (MLE)
                  platform for the sector.
               </p>
               <div
                  style={{
                     backgroundColor: "#E3E3E3",
                     borderRadius: "8px",
                     width: "680px",
                  }}
               >
                  <p
                     style={{ paddingLeft: "8px" }}
                     className={style.useCasesHeader}
                  >
                     Use cases / Application
                  </p>
                  <p
                     style={{ paddingLeft: "8px", paddingRight: "8px" }}
                     className={style.useCasesText}
                  >
                     This document can be used by relevant stakeholders to
                     compare different technologies in India with respect to -
                     features, performance, application, O&M, challenges &
                     costing
                  </p>
               </div>
               <Accordion className="text-end">
                  <Accordion.Collapse eventKey="0">
                     <div>
                        <div className={style.details}>
                           <div
                              style={{
                                 marginTop: "10px",
                                 marginBottom: "10px",
                              }}
                              className="text-start row"
                           >
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Uploaded by
                              </div>
                              <div class="col-4">:Athena</div>
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Theme
                              </div>
                              <div class="col-4">:Monitoring & Evaluation</div>
                           </div>
                           <div
                              style={{
                                 marginTop: "10px",
                                 marginBottom: "10px",
                              }}
                              className="text-start row"
                           >
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Stakeholder
                              </div>
                              <div class="col-4">:Donor Agencies</div>
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Value Chain
                              </div>
                              <div class="col-4">:All</div>
                           </div>
                           <div
                              style={{
                                 marginTop: "10px",
                                 marginBottom: "10px",
                              }}
                              className="text-start row"
                           >
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Geography
                              </div>
                              <div class="col-4">:National</div>
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Urban / Rural
                              </div>
                              <div class="col-4">:Urban</div>
                           </div>
                           <div
                              style={{
                                 marginTop: "10px",
                                 marginBottom: "10px",
                              }}
                              className="text-start row"
                           >
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Language
                              </div>
                              <div class="col-4">:English</div>
                           </div>
                           <div
                              style={{
                                 marginTop: "10px",
                                 marginBottom: "10px",
                              }}
                              className="text-start row"
                           >
                              <div
                                 style={{ color: "#024C73", fontWeight: "700" }}
                                 class="col-2"
                              >
                                 Keywords
                              </div>
                              <div class="col">
                                 :Evaluation, Learning, Monitoring, Sanitation
                                 service delivery, I ndicators
                              </div>
                           </div>
                        </div>
                        <div className="text-start">
                           <p className={style.useCasesHeader}>
                              How is this document helpful
                           </p>
                           <p className={style.useCasesText}>
                              This compendium plays the role of a reference tool
                              for decision-makers, technologies and relevant
                              stakeholders
                           </p>
                        </div>
                        <div className="text-start">
                           <p className={style.useCasesHeader}>
                              Objective of the document
                           </p>
                           <p className={style.useCasesText}>
                              This Compendium is primarily focused on the
                              non-sewered urban centres with and does not relate
                              to the rquirements for sewage treatment
                           </p>
                        </div>
                        <div
                           style={{
                              backgroundColor: "#E3E3E3",
                              borderRadius: "8px",
                              width: "680px",
                              textAlign: "left",
                           }}
                        >
                           <p
                              style={{
                                 paddingLeft: "8px",
                                 paddingBottom: "8px",
                              }}
                              className={style.useCasesHeader}
                           >
                              Keyhighlights
                           </p>
                           <div style={{ color: "#024C73" }}>
                              <p
                                 style={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                 }}
                                 className={style.useCasesText}
                              >
                                 The technologies based on the treatment
                                 mechanism are grouped under the categories
                                 listed below:
                              </p>
                              <ol type="A">
                                 <li className="pt-2">
                                    <u>Biological treatment</u>
                                    <ol>
                                       <li>
                                          Decentralized Wastewater Treatment
                                          System (DEWATS)
                                       </li>
                                       <li>
                                          Sludge Drying Beds, also with
                                          Co-composting (mostly in combination
                                          with sludge drying bed)
                                       </li>
                                       <li>Planted Drying Beds</li>
                                       <li>
                                          Upflow Anaerobic Sludge Blanket (UASB)
                                       </li>
                                       <li>Co-treatment with Sewage</li>
                                       <li>
                                          Sludge settling and MBBR: Jabalpur
                                          FSTP
                                       </li>
                                    </ol>
                                 </li>
                                 <li className="py-3">
                                    <u>Non-biological treatment</u>
                                    <ol>
                                       <li>Pyrolysis (thermal process)</li>
                                       <li>Mechanized De-watering and MBBR</li>
                                    </ol>
                                 </li>
                              </ol>
                           </div>
                        </div>
                     </div>
                  </Accordion.Collapse>
                  <CustomToggle eventKey="0">
                     {show ? "Show less..." : "Show more..."}
                  </CustomToggle>
               </Accordion>
            </div>
         </div>
      </div>
   );
};

export default ProjectDetails;
