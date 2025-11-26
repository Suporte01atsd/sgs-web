

import React from 'react';
import Layout from '../../components/Layout/Layout';
import { DashboardContent } from './Dashboard.styles';

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <DashboardContent>
                <h1>Bem-vindo ao Dashboard</h1>
                <div className="content-grid">
                    <div className="card">
                        <h3>Visão Geral</h3>
                        <p>Resumo dos principais indicadores</p>
                    </div>
                    <div className="card">
                        <h3>Recursos Humanos</h3>
                        <p>Gestão de colaboradores</p>
                    </div>
                    <div className="card">
                        <h3>Operações</h3>
                        <p>Controle operacional</p>
                    </div>
                    {/* Adicione mais cards conforme necessário */}
                </div>
            </DashboardContent>
        </Layout>
    );
};

export default Dashboard;