import styled from 'styled-components';

interface LayoutProps {
    $sidebarCollapsed?: boolean;
    $submenuVisible?: boolean;
}

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main<LayoutProps>`
  flex: 1;
  margin-top: 80px; /* Altura do header */
  margin-left: ${props => {
        // Largura base da sidebar
        // Largura do submenu se estiver visível
        const submenuWidth = props.$submenuVisible ? 380 : 100;

        return `${ submenuWidth}px`;
    }};
  transition: margin-left 0.3s ease;
  padding: 2rem;
  background: #f8fafc;
  min-height: calc(100vh - 80px);
`;