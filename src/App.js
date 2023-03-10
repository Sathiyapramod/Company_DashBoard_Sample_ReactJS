import "./App.css";
import NavbarStyled from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Utilities from "./Utilities";
import Buttons from "./Menu/Buttons";
import Chart from "./Chart";
import Table from "./Table";
import SearchContent from "./SearchContent";
import ProfileDetail from "./Menu/ProfileDetail";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-row">
        <Sidebar />
        <div className="content-wrapper container-fluid">
          <NavbarStyled />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/buttons" element={<Buttons />}/>
              <Route path="/chart" element={<Chart />} />
              <Route path="/table" element={<Table />} />
              <Route path="/search/:index" element={<SearchContent />} />
              <Route path="/profiledetail" element={<ProfileDetail />} />
              <Route path="/404" element={<PageNotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
