import React from 'react'
import { Building, ChevronDown, Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';

function Sidebar() {

    const menuItems = [
        { icon: '📊', label: 'Dashboard AFS-ADI', path: '/', active: true },
        { icon: '📊', label: 'Dashboard AFS', path: '/afs' },
        { icon: '📊', label: 'Dashboard ADI' },
        { icon: '📊', label: 'Dashboard POST MORTEM' },
        { icon: '📋', label: 'Consultation' },
        { icon: '✏️', label: 'Modification' },
        { icon: '👁️', label: 'Suivi des incidents' },
        { icon: '❌', label: 'Status incohérent' },
        { icon: '🔔', label: 'Ajouter une Alerte' },
        { icon: '📊', label: 'Incidents Mensuel' },
    ];

    const morningCheckItems = [
        { icon: '📊', label: 'Dashboard Morning Check' },
        { icon: '📁', label: 'Import File' },
    ];

    const kpisItems = [
        { icon: '📊', label: 'APIs Applicatifs' },
    ];

    const userManagementItems = [
        { icon: '👥', label: 'Consultation' },
        { icon: '👤', label: 'ADMIN' },
    ];

    return (
        <>
            {/* Sidebar */}
            <div className="bg-white shadow-sm  sidebar-scroll" style={{ width: '400px' }}>
                <div className="p-3 border-bottom">
                    <div className="d-flex align-items-center mb-3">
                        <img src="/api/placeholder/40/40" alt="Logo" className="me-2" style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>

                <div className="p-3">
                    <div className="mb-4">
                        <h6 className="text-muted mb-3" style={{ fontSize: '12px', fontWeight: '600' }}>DASHBOARD INCIDENTS</h6>
                        {menuItems.map((item, index) => (
                            <Link key={index} to={item.path} className="text-decoration-none">
                                <div className={`d-flex align-items-center p-2 mb-1 rounded ${item.active ? 'bg-primary text-white' : 'text-dark hover-bg-light'}`}>
                                    <span className="me-2">{item.icon}</span>
                                    <span style={{ fontSize: '14px' }}>{item.label}</span>
                                </div>
                            </Link>
                        ))}

                    </div>

                    <div className="mb-4">
                        <h6 className="text-muted mb-3" style={{ fontSize: '12px', fontWeight: '600' }}>INCIDENT</h6>
                        <div className="d-flex align-items-center p-2 mb-1 text-dark">
                            <span className="me-2">👁️</span>
                            <span style={{ fontSize: '14px' }}>Consultation</span>
                        </div>
                        <div className="d-flex align-items-center p-2 mb-1 text-dark">
                            <span className="me-2">✏️</span>
                            <span style={{ fontSize: '14px' }}>Modification</span>
                        </div>
                        <div className="d-flex align-items-center p-2 mb-1 text-dark">
                            <span className="me-2">👁️</span>
                            <span style={{ fontSize: '14px' }}>Suivi des incidents</span>
                        </div>
                        <div className="d-flex align-items-center p-2 mb-1 text-dark">
                            <span className="me-2">❌</span>
                            <span style={{ fontSize: '14px' }}>Status incohérent</span>
                        </div>
                        <div className="d-flex align-items-center p-2 mb-1 text-dark">
                            <span className="me-2">🔔</span>
                            <span style={{ fontSize: '14px' }}>Ajouter une Alerte</span>
                        </div>
                        <div className="d-flex align-items-center p-2 mb-1 text-dark">
                            <span className="me-2">📊</span>
                            <span style={{ fontSize: '14px' }}>Incidents Mensuel</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h6 className="text-muted mb-3" style={{ fontSize: '12px', fontWeight: '600' }}>MORNING CHECK</h6>
                        {morningCheckItems.map((item, index) => (
                            <div key={index} className="d-flex align-items-center p-2 mb-1 text-dark">
                                <span className="me-2">{item.icon}</span>
                                <span style={{ fontSize: '14px' }}>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <h6 className="text-muted mb-3" style={{ fontSize: '12px', fontWeight: '600' }}>KPIS</h6>
                        {kpisItems.map((item, index) => (
                            <div key={index} className="d-flex align-items-center p-2 mb-1 text-dark">
                                <span className="me-2">{item.icon}</span>
                                <span style={{ fontSize: '14px' }}>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <h6 className="text-muted mb-3" style={{ fontSize: '12px', fontWeight: '600' }}>GESTION UTILISATEURS</h6>
                        {userManagementItems.map((item, index) => (
                            <div key={index} className="d-flex align-items-center p-2 mb-1 text-dark">
                                <span className="me-2">{item.icon}</span>
                                <span style={{ fontSize: '14px' }}>{item.label}</span>
                                {item.label === 'ADMIN' && <ChevronDown size={16} className="ms-auto" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar