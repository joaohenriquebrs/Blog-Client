import React, { useState } from 'react';
import Image from 'next/image';
import {
    HeaderContainer, FirstHeaderContainer, LogoContainer,
    MenuContainer, MenuItem, MenuItemBorder, Strong, SearchBarContainer,
    InputSearchBar, ButtonSearchbar, SecondHeaderContainer, LeftContent,
    MainTitle, SubTitle, SeeMoreButton, RightContent, MenuIcon
} from './styles';
import { Logo, HeaderImage } from 'assets';
import { FaSearch, FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer>
            <FirstHeaderContainer>
                <LogoContainer><Image src={Logo} alt='Logo da empresa Blog' /></LogoContainer>
                <MenuContainer isOpen={isMenuOpen}>
                    <MenuItemBorder href='#'><Strong>Home</Strong></MenuItemBorder>
                    <MenuItem href='#'>Sobre</MenuItem>
                    <MenuItem href='#'>Categorias</MenuItem>
                    <MenuItem href='#'>Contato</MenuItem>
                </MenuContainer>
                <SearchBarContainer>
                    <InputSearchBar placeholder="Buscar" />
                    <ButtonSearchbar><FaSearch color="#FFF" /></ButtonSearchbar>
                </SearchBarContainer>
                <MenuIcon onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes color="#FFF" size={20} /> : <FaBars color="#FFF" size={20} />}
                </MenuIcon>
            </FirstHeaderContainer>
            <SecondHeaderContainer>
                <LeftContent>
                    <MainTitle>
                        Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
                    </MainTitle>
                    <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibheu in aliquet
                        ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.
                    </SubTitle>
                    <SeeMoreButton href='#'>Veja mais<FaArrowRight color='#4FFF4B' /></SeeMoreButton>
                </LeftContent>
                <RightContent><Image src={HeaderImage} alt='Imagem de códigos' layout='responsive' /></RightContent>
            </SecondHeaderContainer>
        </HeaderContainer>
    )
};
