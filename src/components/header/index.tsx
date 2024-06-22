import React from 'react';
import Image from 'next/image';
import {
    HeaderContainer, FirstHeaderContainer, LogoContainer,
    MenuContainer, MenuItem, Strong, BorderName, SearchBarContainer,
    InputSearchBar, ButtonSearchbar, SecondHeaderContainer, LeftContent,
    MainTitle, SubTitle, SeeMoreButton, RightContent
} from './styles';
import { Logo, HeaderImage } from 'assets';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

export default function Header() {

    return (
        <HeaderContainer>
            <FirstHeaderContainer>
                <LogoContainer><Image src={Logo} alt='Logo da empresa Blog' /></LogoContainer>
                <MenuContainer>
                    <MenuItem><BorderName></BorderName><Strong>Home</Strong></MenuItem>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Categorias</MenuItem>
                    <MenuItem>Contato</MenuItem>
                </MenuContainer>
                <SearchBarContainer>
                    <InputSearchBar placeholder="Buscar" />
                    <ButtonSearchbar><FaSearch color="#FFF" /></ButtonSearchbar>
                </SearchBarContainer>
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
                <RightContent><Image src={HeaderImage} alt='Imagem de códigos' /></RightContent>
            </SecondHeaderContainer>
        </HeaderContainer>
    )
};