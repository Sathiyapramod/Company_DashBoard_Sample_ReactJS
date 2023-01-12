import { useState } from 'react';

export function Chart() {
    const [show,setShow] = useState(0);
    return (
        <div className="p-2 text-start m-2">
            <div>
                <h1>Charts</h1>
                <p>Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the official Chart.js documentation.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="Area-chart d-flex bg-danger align-items-center justify-content-center rounded-2">
                AREA-CHART
            </div>
            <div className="Donut-chart d-flex bg-light align-items-center justify-content-center rounded-2 ">
                DONUT CHART
            </div>
            </div>
            
        </div>
    );
}