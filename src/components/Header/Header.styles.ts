import styled from 'styled-components';

interface HeaderProps {
  $submenuVisible?: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: ${props => {
    const submenuWidth = props.$submenuVisible ? 280 : 0;

    return `${submenuWidth}px`;
  }};
  right: 0;
  height: 80px;
  background: black;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 999;
  transition: left 0.3s ease;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Breadcrumb = styled.span`
  font-size: 0.9rem;
  color: #ffffffff;
  white-space: nowrap;
   margin-left: 100px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #3a3a3aff;
  border-radius: 20px;
  padding: 5px;
  flex: 1;
  width: 100%;
  margin-left: 10px;
  margin-right: 20px;
  border: 2px solid #696868ff; 
 
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  padding: 0.5rem;
  font-size: 0.9rem;
  width: 100%;
  outline: none;
  color: #ffffffff;

  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #ffffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    background-color: #444444ff;
    border: 2px solid #696868ff; 
    border-radius: 12px;
    z-index: -1;
  }

  &:hover {
    color: #53a0e7ff;
    
    &::before {
      border-color: #53a0e7ff; 
    }
  }
`;

export const DarkModeToggle = styled(IconButton) <{ isDarkMode: boolean }>`
  color: ${props => props.isDarkMode ? '#e42d2dff' : '#ffffffff'};
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    background-color: #444444ff;
    border: 2px solid #696868ff; 
    border-radius: 12px;
    z-index: -1;
  }

   &:hover {
    color: #53a0e7ff;
    
    &::before {
      border-color: #53a0e7ff; 
    }
  }
`;

export const ProfileDropdown = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  padding: 1rem;
  z-index: 1001;
`;

export const ProfileInfo = styled.div`
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 0.75rem;
`;

export const ProfileName = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
`;

export const ProfileEmail = styled.div`
  color: #666;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 0;
  color: #333;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #007bff;
  }
`;