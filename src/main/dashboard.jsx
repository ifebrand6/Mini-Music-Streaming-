import React from 'react';
import AnalyticChart from '../components/dashboard/analyticChart';
import AnalyticTable from '../components/dashboard/analyticTable';
import Header from '../components/dashboard/header';
import SideBar from '../components/dashboard/sideBar';

export default function Dashboard() {
    return (
        <div className="container">
            <Header></Header>
            <SideBar/>
            <AnalyticChart/>
            <AnalyticTable/>
        </div>
    )
}
