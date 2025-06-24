import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Building, ChevronDown, Search } from 'lucide-react';
import Sidebar from './Sidebar';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('Dashboard AFS-ADI');


    return (
        <div className="d-flex vh-100 bg-light">
            <Sidebar />


            <Outlet />
        </div>
    );
};

export default Dashboard;