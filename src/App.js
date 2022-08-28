import "./App.css";
import Breadcrumb from "./Components/ID-9/Breadcrumb/Breadcrumb";
import PageHeader from "./Components/ID-9/Header/PageHeader";
import Projects from "./Components/ID-9/Projects/Projects";
import SearchPage from "./Components/ID-10/SearchPage";
import ShowResult from "./Components/ID-9/ShowResult/ShowResult";
import ID13 from "./Components/ID-13/ID13";
import ID14 from "./Components/ID-14/ID14";

function App() {
   return (
      <div className="page-bg">
         {/* ----------------------------- ID-9--------------------------- */}
         <PageHeader></PageHeader>
         <Breadcrumb></Breadcrumb>
         <Projects></Projects>
         <ShowResult></ShowResult>
         {/* ------------------------------ID-10--------------------------- */}
         <SearchPage></SearchPage>
         {/* ------------------------------ID-13--------------------------- */}
         <ID13></ID13>
         {/* ------------------------------ID-14--------------------------- */}
         <ID14></ID14>
      </div>
   );
}

export default App;
