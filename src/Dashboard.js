import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className='d-flex flex-row justify-content-between align-items-center p-3'>
                <div className='text-start p-3 fw-bold opacity-75'>
                    <h1>Dashboard</h1>
                </div>
                <div>
                    <button className='btn btn-primary p-3'>Generate Report</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard