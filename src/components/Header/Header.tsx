import React, { useState } from 'react';
import * as S from './Header.styles';
import { FiSearch, FiBell, FiUser, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext'; 

interface HeaderProps {
    $submenuVisible?: boolean;
}

const Header: React.FC<HeaderProps> = ({ $submenuVisible }) => {
    const { theme, toggleTheme } = useTheme(); 
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <S.HeaderContainer $submenuVisible={$submenuVisible}>
            <S.Nav>
                <S.LeftSection>
                    <S.Breadcrumb>Inicio / Dashboard</S.Breadcrumb>
                    <S.SearchContainer>
                        <S.SearchButton>
                            <FiSearch size={18} />
                        </S.SearchButton>
                        <S.SearchInput
                            placeholder="Pesquisar empresas por nome ou CNPJ"
                        />
                    </S.SearchContainer>
                </S.LeftSection>

                <S.RightSection>
                    <S.ActionsContainer>
                        <S.IconButton>
                            <FiBell size={20} />
                        </S.IconButton>

                        <S.DarkModeToggle
                            onClick={toggleTheme}
                            isDarkMode={theme === 'dark'} 
                        >
                            {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />} 
                        </S.DarkModeToggle>

                        <S.ProfileDropdown>
                            <S.IconButton onClick={toggleProfileDropdown}>
                                <FiUser size={20} />
                            </S.IconButton>

                            {isProfileOpen && (
                                <S.DropdownMenu>
                                    <S.ProfileInfo>
                                        <S.ProfileName>Monique</S.ProfileName>
                                        <S.ProfileEmail>suporte@atsditsolutions...</S.ProfileEmail>
                                    </S.ProfileInfo>
                                    <S.DropdownItem>
                                        Redefinir senha
                                    </S.DropdownItem>
                                </S.DropdownMenu>
                            )}
                        </S.ProfileDropdown>
                    </S.ActionsContainer>
                </S.RightSection>
            </S.Nav>
        </S.HeaderContainer>
    );
};

export default Header;