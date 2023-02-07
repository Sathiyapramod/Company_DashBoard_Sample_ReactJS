import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import TableChartIcon from "@mui/icons-material/TableChart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Fab from "@mui/material/Fab";
import Componentsmenu from "./Menu/Componentsmenu";
import ComponentsPage from "./Menu/ComponentsPage";
import UtilitiesMenu from "./Menu/UtilitiesMenu";
import UtilitiesPage from "./Menu/UtilitiesPage";
import PagesMenu from "./Menu/PagesMenu";
import Pages from "./Menu/Pages";

const Sidebar = () => {
  const styling = {
    textDecoration: "none",
    color: "white",
  };
  const [flag, setFlag] = useState(false);
  const sidebar = {
    width: flag ? "280px" : "120px",
    height: "100vh",
  };
  return (
    <div className="sidebar">
      <ul className="navbar-nav bg-dark sidebar text-white" style={sidebar}>
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          style={styling}
        />
        <div className="sidebar-brand-text mx-3 fs-4 p-3">
          {flag ? (
            <span className="fs-3">😋</span>
          ) : (
            <span className="fs-1">😋</span>
          )}
          {flag ? (
            <span className="visible">
              SB Admin <sup>2</sup>
            </span>
          ) : (
            <span className="d-none">
              SB Admin <sup>2</sup>
            </span>
          )}
        </div>
        <div className="mt-3 mb-3">
          <Fab
            color="black"
            aria-label="Toggle-Sidebar"
            onClick={() => setFlag(!flag)}
          >
            {flag ? (
              <ArrowForwardIosIcon fontSize="small" />
            ) : (
              <ArrowBackIosNewIcon fontSize="small" />
            )}
          </Fab>
        </div>
        <hr className="sidebar-divider my-0" />
        <li className="fs-4 ms-2 align-items-center text-start ps-3 flag">
          <Link className="nav-link" to="/">
            {flag ? (
              <div className="visible d-flex gap-2 flex-row align-items-center">
                <span className="fs-5">
                  <GridViewOutlinedIcon fontSize="medium" />
                </span>
                <span>DashBoard</span>
              </div>
            ) : (
              <div className="d-flex flex-wrap gap-3 me-3 pt-2 justify-content-center fs-6">
                <span className="fs-6">
                  <GridViewOutlinedIcon fontSize="medium" />
                </span>
                <span>DashBoard</span>
              </div>
            )}
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item fs-5 text-start">
          
            {flag ? (
              <div>
                <Componentsmenu />
              </div>
            ) : (
              <div>
                <ComponentsPage />
              </div>
            )}
          
        </li>
        <li className="nav-item fs-5 text-start">
          <Link className="nav-link" to="/utilities" style={styling}>
            {flag ? (
              <div>
                <UtilitiesMenu />
              </div>
            ) : (
              <div>
                <UtilitiesPage />
              </div>
            )}
          </Link>
        </li>
        <div className="sidebar-heading opacity-50 text-start ps-3">Addons</div>
        <li className="nav-item text-start">
          <Link className="nav-link collapsed">
            {flag ? (
              <div>
                <PagesMenu />
              </div>
            ) : (
              <div>
                <Pages />
              </div>
            )}
          </Link>
        </li>
        <li className="nav-item text-start">
          <Link to="/chart" className="text-light" style={styling}>
            {flag ? (
              <div className="d-flex flex-row gap-2 mt-2 ms-3 align-items-center">
                <span>
                  <EqualizerIcon />
                </span>
                <span className="fs-5">Chart</span>
              </div>
            ) : (
              <div className="d-flex flex-column justify-content-center gap-2 align-items-center me-2">
                <span>
                  <EqualizerIcon />
                </span>
                <span>Chart</span>
              </div>
            )}
          </Link>
        </li>
        <li className="nav-item text-start flag mt-3">
          <Link to="/table" className="text-light" style={styling}>
            {flag ? (
              <div className="d-flex flex-row gap-2 ms-3 align-items-center ">
                <span>
                  <TableChartIcon />
                </span>
                <span className="fs-5">Tables</span>
              </div>
            ) : (
              <div className="d-flex flex-column justify-content-center gap-2 me-2 align-items-center">
                <span>
                  <TableChartIcon />
                </span>
                <span>Tables</span>
              </div>
            )}
          </Link>
        </li>
        <hr className="sidebar-divider d-none " />
      </ul>
    </div>
  );
};

export default Sidebar;
