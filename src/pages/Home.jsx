import React from 'react'
import { Building, ChevronDown, Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const statsData = [
        { number: 32, label: 'Ghana', majeur: 8, significatif: 24, color: 'primary' },
        { number: 19, label: 'Guinée', majeur: 10, significatif: 9, color: 'primary' },
        { number: 0, label: 'GUINEE EQUATORIALE', majeur: 0, significatif: 0, color: 'secondary' },
        { number: 2, label: 'Mauritanie', majeur: 2, significatif: 0, color: 'secondary' },
        { number: 27, label: 'Madagascar', majeur: 20, significatif: 7, color: 'primary' },
        { number: 39, label: 'Sénégal', majeur: 14, significatif: 25, color: 'primary' },
        { number: 6, label: 'Togo', majeur: 1, significatif: 5, color: 'secondary' },
        { number: 387, label: 'Total D\'incidents', majeur: 149, significatif: 230, color: 'warning' },
    ];

    const applicationsData = [
        { rank: 1, app: 'AMPLITUDE', incidents: 91, percentage: '24.01%' },
        { rank: 2, app: 'CARTHAGO', incidents: 55, percentage: '14.51%' },
        { rank: 3, app: 'OCRE (OCTROI DE CREDIT)', incidents: 52, percentage: '13.72%' },
        { rank: 4, app: 'BANKUP 💎 SGCONNECT', incidents: 33, percentage: '8.71%' },
        { rank: 5, app: 'GED / DOCUBASE', incidents: 30, percentage: '7.92%' },
        { rank: 6, app: 'BANKUP 💎 SGCONNECT', incidents: 28, percentage: '7.39%' },
        { rank: 7, app: 'IBOS 💠 MARKET', incidents: 22, percentage: '5.80%' },
        { rank: 8, app: 'NEXTGEN - MYBUSINESS', incidents: 21, percentage: '5.54%' },
        { rank: 9, app: 'IBE - SOGECASHNET', incidents: 16, percentage: '4.22%' },
    ];

    const componentsData = [
        { rank: 1, component: '', incidents: 122, percentage: '32.19%' },
        { rank: 2, component: 'CARTHAGO', incidents: 37, percentage: '9.76%' },
        { rank: 3, component: 'IBOS 💠 MARKET', incidents: 23, percentage: '6.07%' },
        { rank: 4, component: 'NEXTGEN - MYBUSINESS', incidents: 14, percentage: '3.69%' },
        { rank: 5, component: 'AMPLITUDE BANK', incidents: 11, percentage: '2.90%' },
        { rank: 6, component: 'OCRE', incidents: 10, percentage: '2.64%' },
        { rank: 7, component: 'File System', incidents: 10, percentage: '2.64%' },
        { rank: 8, component: 'Powercard', incidents: 9, percentage: '2.37%' },
        { rank: 9, component: 'IBE - SOGECASHNET', incidents: 9, percentage: '2.37%' },
    ];

    const zoneData = [
        { rank: 1, zone: 'AFO', incidents: 242, percentage: '63.85%' },
    ];

    const subsidiaryData = [
        { rank: 1, subsidiary: 'SGBF', country: 'BURKINA FASO', incidents: 15, percentage: '46.88%' },
    ];

    return (
        <div className="flex-grow-1 d-flex flex-column">
            {/* Header */}
            <div className="bg-white border-bottom p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>Dernier mise à jour :</p>
                        <p className="mb-0" style={{ fontSize: '14px' }}>Date d'import : Le 27/02/2025 à 16:00 avec un totals de 6 incidents ajoutés et 2 incidents requalifiés</p>
                    </div>
                    <div className="text-muted" style={{ fontSize: '12px' }}>
                        20°C<br />
                        Casablanca
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="p-4 flex-grow-1 sidebar-scroll" >
                <div className="row g-3 mb-4">
                    {statsData.map((stat, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className={`text-${stat.color} mb-2`}>
                                        <Building size={40} />
                                    </div>
                                    <h2 className="fw-bold mb-1">{stat.number}</h2>
                                    <p className="text-muted mb-2" style={{ fontSize: '14px' }}>{stat.label}</p>
                                    <div className="d-flex justify-content-center gap-3" style={{ fontSize: '12px' }}>
                                        <span>● Majeur: {stat.majeur}</span>
                                        <span>● Significatif: {stat.significatif}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tables Section */}
                <div className="row g-4">
                    {/* Applications impactées */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h6 className="mb-0">Les applications impactées</h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-sm mb-0">
                                        <thead className="table-light">
                                            <tr style={{ fontSize: '12px' }}>
                                                <th>#</th>
                                                <th>Application</th>
                                                <th>Nombre total d'incidents</th>
                                                <th>Pourcentage</th>
                                                <th>Progression</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {applicationsData.map((app, index) => (
                                                <tr key={index} style={{ fontSize: '12px' }}>
                                                    <td>{app.rank}</td>
                                                    <td>{app.app}</td>
                                                    <td>{app.incidents}</td>
                                                    <td>{app.percentage}</td>
                                                    <td>
                                                        <div className="progress" style={{ height: '8px', width: '60px' }}>
                                                            <div className="progress-bar bg-primary" style={{ width: app.percentage }}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Incidents par Composant */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h6 className="mb-0">Incidents par Composant/Service Impacté</h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-sm mb-0">
                                        <thead className="table-light">
                                            <tr style={{ fontSize: '12px' }}>
                                                <th>#</th>
                                                <th>Composant</th>
                                                <th>Nombre total d'incidents</th>
                                                <th>Pourcentage</th>
                                                <th>Progression</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {componentsData.map((comp, index) => (
                                                <tr key={index} style={{ fontSize: '12px' }}>
                                                    <td>{comp.rank}</td>
                                                    <td>{comp.component}</td>
                                                    <td>{comp.incidents}</td>
                                                    <td>{comp.percentage}</td>
                                                    <td>
                                                        <div className="progress" style={{ height: '8px', width: '60px' }}>
                                                            <div className="progress-bar bg-primary" style={{ width: comp.percentage }}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Liste des incidents par zone */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h6 className="mb-0">Liste des incidents par zone</h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-sm mb-0">
                                        <thead className="table-light">
                                            <tr style={{ fontSize: '12px' }}>
                                                <th>#</th>
                                                <th>Zone</th>
                                                <th>Nombre total d'incidents</th>
                                                <th>Pourcentage</th>
                                                <th>Progression</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {zoneData.map((zone, index) => (
                                                <tr key={index} style={{ fontSize: '12px' }}>
                                                    <td>{zone.rank}</td>
                                                    <td>{zone.zone}</td>
                                                    <td>{zone.incidents}</td>
                                                    <td>{zone.percentage}</td>
                                                    <td>
                                                        <div className="progress" style={{ height: '8px', width: '60px' }}>
                                                            <div className="progress-bar bg-primary" style={{ width: zone.percentage }}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Liste des incidents des Filiales */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h6 className="mb-0">Liste des incidents des Filiales Cédées</h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-sm mb-0">
                                        <thead className="table-light">
                                            <tr style={{ fontSize: '12px' }}>
                                                <th>#</th>
                                                <th>Filiale</th>
                                                <th>Pays</th>
                                                <th>Nombre d'incidents</th>
                                                <th>Pourcentage</th>
                                                <th>Progression</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {subsidiaryData.map((sub, index) => (
                                                <tr key={index} style={{ fontSize: '12px' }}>
                                                    <td>{sub.rank}</td>
                                                    <td>{sub.subsidiary}</td>
                                                    <td>{sub.country}</td>
                                                    <td>{sub.incidents}</td>
                                                    <td>{sub.percentage}</td>
                                                    <td>
                                                        <div className="progress" style={{ height: '8px', width: '60px' }}>
                                                            <div className="progress-bar bg-primary" style={{ width: sub.percentage }}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Home