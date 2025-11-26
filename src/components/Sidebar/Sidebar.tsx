

import React, { useState } from 'react';
import * as S from './Sidebar.styles';
import {
    FiHome,
    FiUsers,
    FiEye,
    FiTarget,
    FiTruck,
    FiMessageCircle,
    FiShield,
    FiBook,
    FiAlertTriangle,
    FiAward,
    FiDollarSign,
    FiHeart,
    FiChevronLeft,
    FiChevronRight
} from 'react-icons/fi';
import Logo from "../../assets/logo.png"

interface SubmenuItem {
    id: string;
    label: string;
    comingSoon?: boolean;
}

interface MenuItem {
    id: string;
    icon: React.ElementType;
    label: string;
    submenu?: SubmenuItem[];
}

interface SidebarProps {
    setSubmenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
    setSubmenuVisible
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [currentSubmenu, setCurrentSubmenu] = useState<SubmenuItem[]>([]);
    const [submenuTitle, setSubmenuTitle] = useState('');

    const handleMenuItemClick = (item: MenuItem) => {
        setActiveSection(item.id);

        if (item.submenu && item.submenu.length > 0) {
            setCurrentSubmenu(item.submenu);
            setSubmenuTitle(item.label);
            setShowSubmenu(true);
            setSubmenuVisible(true)
        } else {
            setShowSubmenu(false);
        }
    };

    const menuItems: MenuItem[] = [
        { id: 'rh', icon: FiUsers, label: 'Recursos Humanos',
            submenu: [
                    { id: 'visao-geral', label: 'Visão geral' },
                    { id: 'suprimentos', label: 'Suprimentos' },
                    { id: 'faturamento', label: 'Faturamento' },
                    { id: 'produtos', label: 'Produtos' },
                    { id: 'servicos', label: 'Serviços' },
                    { id: 'relatorios', label: 'Relatórios' },
                ]
         },
        { id: 'inteligencia', icon: FiEye, label: 'INTELIGÊNCIA POLICIAL' },
        { id: 'operacoes', icon: FiTarget, label: 'OPERAÇÕES' },
        { id: 'logistica', icon: FiTruck, label: 'LOGÍSTICA' },
        { id: 'frota', icon: FiTruck, label: 'FROTA' },
        { id: 'comunicacao', icon: FiMessageCircle, label: 'COMUNICAÇÃO SOCIAL' },
        { id: 'corregedoria', icon: FiShield, label: 'CORREGEDORIA' },
        { id: 'treinamento', icon: FiBook, label: 'TREINAMENTO' },
        { id: 'defesa-civil', icon: FiAlertTriangle, label: 'DEFESA CIVIL' },
        { id: 'qualidade', icon: FiAward, label: 'GESTÃO DE QUALIDADE' },
        { id: 'financas', icon: FiDollarSign, label: 'FINANÇAS' },
        { id: 'apoio-social', icon: FiHeart, label: 'APOIO SOCIAL' },
    ];

    return (
        <>
            <S.SidebarContainer >
                <S.NavSection>
                    <S.LogoContainer>
                        <S.Logo src={Logo} alt="Logo SGS" />
                    </S.LogoContainer>

                    {menuItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                            <S.NavItem
                                key={item.id}
                                $isActive={isActive}
                                $isCollapsed={isCollapsed}
                                $hasSubmenu={!!item.submenu}
                                onClick={() => handleMenuItemClick(item)}
                            >
                                <S.IconContainer $isActive={isActive}>
                                    <IconComponent size={20} />
                                </S.IconContainer>
                            </S.NavItem>
                        );
                    })}
                </S.NavSection>
            </S.SidebarContainer>

            {showSubmenu && (
                <S.SubmenuContainer $isVisible={showSubmenu} $isCollapsed={isCollapsed}>
                    <S.SubmenuHeader>
                        <S.TextFixed>COLEÇÔES</S.TextFixed>
                        <S.SubmenuTitle>{submenuTitle}</S.SubmenuTitle>
                    </S.SubmenuHeader>

                    <S.SubmenuContent>
                        {currentSubmenu.map((subItem) => (
                            <S.SubmenuItem
                                key={subItem.id}
                                $comingSoon={subItem.comingSoon}
                            >
                                <span>{subItem.label}</span>
                                {subItem.comingSoon && (
                                    <S.ComingSoonBadge>Em breve</S.ComingSoonBadge>
                                )}
                            </S.SubmenuItem>
                        ))}
                    </S.SubmenuContent>
                </S.SubmenuContainer>
            )}
           

        </>
    );
};

export default Sidebar;


