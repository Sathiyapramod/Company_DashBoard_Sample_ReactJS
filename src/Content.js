import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Chart } from './Chart';
import { Table } from './Table';
import { Utilities } from './Utilities';
import { Components } from './Components';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path="/utilities" element={<Utilities />} />
                <Route path="/components" element={<Components />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="/table" element={<Table />} />
            </Routes>
        </div>
    )
}

export default Content