import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const styling = {
        textDecoration: "none",
        color: "white",
    };
    return (
        <div>
            <ul class="sidebar navbar-nav bg-gradient-primary sidebar sidebar-dark accordion bg-dark text-white" id="accordionSidebar">
                <Link class="sidebar-brand d-flex align-items-center justify-content-center" style={styling} />
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3 fs-3 p-3">😝 SB Admin <sup>2</sup></div>
                <hr class="sidebar-divider my-0"></hr>
                <li class="nav-item active fs-4">
                    <Link class="nav-link" to="/">
                        <span className='fs-4 fw-bold'>Dashboard</span></Link>
                </li>
                <hr class="sidebar-divider"></hr>
                <div class="sidebar-heading opacity-50">
                    Interface
                </div>
                <li class="nav-item fs-4">
                    <Link class="nav-link collapsed" to="/components" style={styling}>
                        <span>Components</span>
                    </Link>

                </li>
                <li class="nav-item fs-4">
                    <Link class="nav-link collapsed" to="/utilities" style={styling}>
                        <span>Utilities</span>
                    </Link>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Utilities:</h6>

                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider" />
                <div class="sidebar-heading opacity-50">
                    Addons
                </div>
                <li class="nav-item">
                    <Link class="nav-link collapsed">
                        <span className='fs-4'>Pages</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/chart" class="text-light p-3" style={styling}><span className='fs-4'>Chart</span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/table" className='text-light p-3 m-3' style={styling}><span className='fs-4'>Tables</span></Link>
                </li>
                <hr class="sidebar-divider d-none " />
            </ul>
        </div>
    )
}

export default Sidebar