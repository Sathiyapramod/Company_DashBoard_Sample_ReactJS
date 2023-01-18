import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TableChartIcon from '@mui/icons-material/TableChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fab from '@mui/material/Fab';


const Sidebar = () => {
    const styling = {
        textDecoration: "none",
        color: "white",
    };
    const [flag, setFlag] = useState(false);
    const sidebar = {
        width: (flag) ? "280px" : "120px",
        height: "100vh"
    }
    return (
        <div className=''>
            <div className='d-flex flex-column'>
                <ul class=" navbar-nav bg-gradient-primary sidebar sidebar-primary accordion bg-primary text-white" id="accordionSidebar" style={sidebar}>
                    <Link class="sidebar-brand d-flex align-items-center justify-content-center" style={styling} />
                    <div class="sidebar-brand-text mx-3 fs-4 p-3">
                        {flag ? (<span className='fs-3'>😋</span>) : (<span className='fs-1'>😋</span>)}
                        {flag ? (<span className='visible'>SB Admin <sup>2</sup></span>) :
                            (<span className='d-none'>SB Admin <sup>2</sup></span>)}</div>
                    <div className='m-2 opacity-75 '>
                        <Fab color="primary" aria-label="Toggle-Sidebar" onClick={() => setFlag(!flag)}>
                            {flag ? <ArrowForwardIosIcon fontSize='small' /> :
                                <ArrowBackIosNewIcon fontSize='small' />}
                        </Fab>
                    </div>
                    <hr class="sidebar-divider my-0" />
                    <li class="fs-4 lh-1 align-items-center text-start ps-3 opacity-75">
                        <Link class="nav-link" to="/">
                            {flag ? (<div className='visible'>
                                <span className='fs-5 fw-bold'>
                                    <GridViewOutlinedIcon fontSize='medium' /> DashBoard
                                </span>
                            </div>) : (<div className='d-flex flex-wrap gap-2 me-3 pt-2 justify-content-center fs-6'>
                                <span className='fs-6 fw-bold'>
                                    <GridViewOutlinedIcon fontSize='medium' />
                                </span>
                                <span>DashBoard</span>
                            </div>)}
                        </Link>
                    </li>
                    <hr class="sidebar-divider" />
                    <div class="sidebar-heading opacity-50 text-start ps-3">
                        Interface
                    </div>
                    <li class="nav-item fs-5 text-start ps-3">
                        <Link class="nav-link" to="/components" style={styling}>{flag ? (
                            <div className='d-flex flex-row gap-2 align-items-center '>
                                <span><SettingsSuggestOutlinedIcon /></span>
                                <span>



                                </span>
                            </div>
                        ) : (<div className='d-flex flex-wrap justify-content-center gap-2 fs-6 me-3 mb-2 mt-2 opacity-75'>
                            <span><SettingsSuggestOutlinedIcon /></span>
                            <span>Components</span>
                        </div>
                        )}
                        </Link>
                    </li>
                    <li class="nav-item fs-5 text-start ps-3">
                        <Link class="nav-link" to="/utilities" style={styling}>
                            {flag ? (<div className='d-flex flex-row gap-2 align-items-center '>
                                <span><BuildOutlinedIcon /></span>
                                <span>Utilities</span>
                            </div>) : (<div className='d-flex flex-wrap justify-content-center gap-3 fs-6 me-3 mb-2 mt-2 opacity-75'>
                                <span><BuildOutlinedIcon /></span>
                                <span>Utilities</span>
                            </div>)}
                        </Link>
                    </li>
                    <hr class="sidebar-divider" />
                    <div class="sidebar-heading opacity-50 text-start ps-3">
                        Addons
                    </div>
                    <li class="nav-item text-start ps-3">
                        <Link class="nav-link collapsed">
                            {flag ? (<div className='d-flex flex-row gap-2 align-items-center '>
                                <span><FolderOutlinedIcon /></span>
                                <span className='fs-4'>Pages</span>
                            </div>) : (<div className='d-flex flex-wrap justify-content-center gap-2 fs-6 me-3 mb-2 mt-2 opacity-75 align-items-center'>
                                <span><FolderOutlinedIcon /></span>
                                <span>Pages</span>
                            </div>)}
                        </Link>
                    </li>
                    <li class="nav-item text-start ps-3">
                        <Link to="/chart" class="text-light p-3" style={styling}>
                            {flag ? (<div className='d-flex flex-row gap-2 align-items-center '>
                                <span><EqualizerIcon /></span>
                                <span className='fs-4'>Chart</span>
                            </div>) : (<div className='d-flex flex-wrap justify-content-center gap-2 fs-6 me-3 mb-2 mt-2 opacity-75 align-items-center'>
                                <span><EqualizerIcon /></span>
                                <span>Chart</span>
                            </div>)}
                        </Link>
                    </li>
                    <li class="nav-item text-start ps-3">
                        <Link to="/table" className='text-light p-3' style={styling}>
                            {flag ? (<div className='d-flex flex-row gap-2 align-items-center '>
                                <span><TableChartIcon /></span>
                                <span className='fs-4'>Tables</span>
                            </div>) : (<div className='d-flex flex-wrap justify-content-center gap-2 fs-6 me-3 mb-2 mt-2 opacity-75 align-items-center'>
                                <span><TableChartIcon /></span>
                                <span>Tables</span>
                            </div>)}
                        </Link>
                    </li>
                    <hr class="sidebar-divider d-none " />
                    <li>


                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar