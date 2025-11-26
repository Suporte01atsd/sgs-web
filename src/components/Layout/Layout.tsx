import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { LayoutContainer, MainContent } from './Layout.styles';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState(false);

    return (
        <LayoutContainer>
            <Header $submenuVisible={submenuVisible} />
            <Sidebar setSubmenuVisible={setSubmenuVisible} />
            <MainContent
               // $sidebarCollapsed={sidebarCollapsed}
                $submenuVisible={submenuVisible}
            >
                {children}
            </MainContent>
        </LayoutContainer>
    );
};

export default Layout;