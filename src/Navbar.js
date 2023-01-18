import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let url="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" ; 
    return (
        <div className='bg-light p-3 shadow'>
            <navbar className='navbar nav d-flex justify-content-between'>
                <div className='d-flex flex-row gap-1'>
                    <input type="search" className='form-control' placeholder='Search'></input>
                    <Link to ="/search"><button className='btn btn-primary opacity-75'>search</button></Link>
                </div>
                <div className='d-flex flex-row gap-2 align-items-center'>
                    <div>
                        <button className='btn btn-outline-primary'>
                            🔔
                            <sup className='badge badge-danger'>3+</sup>
                        </button>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary'>
                            💬<span className='badge badge-danger'>3+</span>
                        </button>
                    </div>
                    <div className='d-flex flex-row align-items-center bg-lighter'>
                        <div>Douglas McGee</div>
                        <div className='img-thumbnail'><img src={url} width={"50px"} height={"50px"} alt={"pic"}/></div>
                    </div>
                </div>
            </navbar>
        </div>
    );
   
}

export default Navbar