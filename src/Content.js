import React from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import { Chart } from './Chart';
import { Table } from './Table';
import { Utilities } from './Utilities';
import { Components } from './Components';
import { SearchContent } from './SearchContent';
import { PageNotFound } from './PageNotFound';
import { Welcome } from './Welcome';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/utilities" element={<Utilities />} />
                <Route path="/components" element={<Components />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="/table" element={<Table />} />
                <Route path="/search/:index" element={<SearchContent />} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate replace to ="/404" />} />
            </Routes>
        </div>
    )
}

export default Content