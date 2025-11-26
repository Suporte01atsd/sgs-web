

import styled from 'styled-components';

interface SidebarProps {
    $isCollapsed?: boolean;
    $isActive?: boolean;
    $hasSubmenu?: boolean;
    $showSubmenu?: boolean;
    $isVisible?: boolean;
    $comingSoon?: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100px;
    height: 100vh;
    background: linear-gradient(180deg, #1e40af 0%, #50a1cfff 100%);
    color: white;
    padding: ${props => props.$isCollapsed ? '2rem 1rem' : '2rem 1.5rem'};
    overflow-y: auto;
    z-index: 1001;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease, padding 0.3s ease;
    overflow-x: hidden;
    position: fixed;
`;

export const SubmenuContainer = styled.div<SidebarProps>`
    position: fixed;
    left: 100px;
    top: 0;
    width: 280px;
    height: 100vh;
    background: white;
    color: #333;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1002;
    transform: ${props => props.$isVisible ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease, left 0.3s ease;
    display: flex;
    flex-direction: column;
`;

export const SubmenuHeader = styled.div`
    padding: 2rem 1.5rem 1rem;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: flex-end;
    align-items: self-start;
    background: #f8fafc;
    flex-direction: column;
`;

export const TextFixed = styled.p`
font-size: 10px;
`;

export const SubmenuTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e40af;
    margin: 0;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
        background: #e2e8f0;
    }
`;

export const SubmenuContent = styled.div`
    padding: 1rem 0;
    flex: 1;
    overflow-y: auto;
`;

export const SubmenuItem = styled.div<SidebarProps>`
    padding: 0.75rem 1.5rem;
    cursor: ${props => props.$comingSoon ? 'not-allowed' : 'pointer'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s;
    opacity: ${props => props.$comingSoon ? 0.6 : 1};

    &:hover {
        background-color: ${props => props.$comingSoon ? 'transparent' : '#f1f5f9'};
    }

    span {
        font-size: 0.9rem;
        color: ${props => props.$comingSoon ? '#64748b' : '#334155'};
    }
`;

export const ComingSoonBadge = styled.span`
    font-size: 0.75rem;
    color: #94a3b8;
    font-style: italic;
`;

export const Overlay = styled.div<SidebarProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: ${props => props.$isVisible ? 'block' : 'none'};
    
    @media (min-width: 768px) {
        display: none;
    }
`;

export const LogoSection = styled.div<SidebarProps>`
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: ${props => props.$isCollapsed ? 'column' : 'row'};
    justify-content: space-between;
    align-items: ${props => props.$isCollapsed ? 'center' : 'flex-start'};
    gap: ${props => props.$isCollapsed ? '1rem' : '0'};
`;

export const ToggleButton = styled.button`
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    margin-bottom: 1rem;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
    }
`;

export const NavSection = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const NavItem = styled.div<SidebarProps>`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: ${props => props.$isCollapsed ? '0.75rem' : '0.75rem 1rem'};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    justify-content: ${props => props.$isCollapsed ? 'center' : 'flex-start'};
    background: ${props => props.$isActive
        ? '#ffffffff'
        : 'rgba(255, 255, 255, 0.1)'
    };
    
    &:hover {
        background: ${props => props.$isActive
        ? '#fcfcfcff'
        : 'rgba(255, 255, 255, 0.25)'
    };
    }

    span {
        font-size: 0.9rem;
        font-weight: 500;
        white-space: nowrap;
        opacity: ${props => props.$isCollapsed ? 0 : 1};
        transition: opacity 0.3s ease;
        color: ${props => props.$isActive ? '#1e40af' : 'white'};
    }

    svg {
        flex-shrink: 0;
        color: ${props => props.$isActive ? '#1e40af' : 'white'};
        transition: color 0.3s ease;
    }
`;

export const IconContainer = styled.div<SidebarProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    transition: all 0.3s ease;

    svg {
        color: ${props => props.$isActive ? '#1e40af' : 'white'};
        transition: color 0.3s ease;
    }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  color: white;
`;

export const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  object-fit: contain;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  margin-left: -4px;
`;