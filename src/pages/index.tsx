import React, { useRef } from 'react';
import Header from 'components/header';
import {
  MainContainer,
  ContentContainer,
  TopContentContainer,
  LeftTopContent,
  LeftTopImage,
  MainText,
  SubText,
  RightTopContent,
  FirstRightContainer,
  DateText,
  SecondRightContainer,
  BottomContent,
  MainTextRight,
  SubTextRight,
  BlockBottom,
  BottomImage,
  MainTextBottom,
  SubTextBottom,
  ButtonUpPage,
  Reference
} from './style';
import Image from 'next/image';
import {
  FirstImageMain,
  FourthImageMain,
  SecondImageMain,
  ThirdImageMain
} from 'assets';
import { FaArrowUp } from 'react-icons/fa';

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <MainContainer>
      <Reference ref={mainContentRef}></Reference>
      <Header />
      <ContentContainer>
        <TopContentContainer>
          <LeftTopContent>
            <LeftTopImage>
              <Image
                src={FirstImageMain}
                alt="Imagem de uma mesa com utensílios em cima"
                layout="responsive"
              />
            </LeftTopImage>
            <DateText>Janeiro 04, 2022</DateText>
            <MainText>Começando no ReactJS em 2022</MainText>
            <SubText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed
              volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
            </SubText>
          </LeftTopContent>
          <RightTopContent>
            <FirstRightContainer>
              <DateText>Janeiro 04, 2022</DateText>
              <MainTextRight>
                Conheça as principais técnicas para conseguir uma vaga
                internacional em programação
              </MainTextRight>
              <SubTextRight>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique.
              </SubTextRight>
            </FirstRightContainer>
            <SecondRightContainer>
              <DateText>Janeiro 04, 2022</DateText>
              <MainTextRight>
                Veja a evolução do Front-end na prática
              </MainTextRight>
              <SubTextRight>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque.
              </SubTextRight>
            </SecondRightContainer>
          </RightTopContent>
        </TopContentContainer>
        <BottomContent>
          <BlockBottom>
            <BottomImage>
              <Image
                src={SecondImageMain}
                alt="Imagem de uma pessoa mexendo no notebook"
                layout="responsive"
              />
            </BottomImage>
            <DateText>Janeiro 04, 2022</DateText>
            <MainTextBottom>
              10 dicas para conseguir a vaga desejada
            </MainTextBottom>
            <SubTextBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.
            </SubTextBottom>
          </BlockBottom>
          <BlockBottom>
            <BottomImage>
              <Image
                src={ThirdImageMain}
                alt="Imagem de notebook com código"
                layout="responsive"
              />
            </BottomImage>
            <DateText>Janeiro 04, 2022</DateText>
            <MainTextBottom>
              10 dicas para conseguir a vaga desejada
            </MainTextBottom>
            <SubTextBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.
            </SubTextBottom>
          </BlockBottom>
          <BlockBottom>
            <BottomImage>
              <Image
                src={FourthImageMain}
                alt="Imagem de um celular"
                layout="responsive"
              />
            </BottomImage>
            <DateText>Janeiro 04, 2022</DateText>
            <MainTextBottom>
              10 dicas para conseguir a vaga desejada
            </MainTextBottom>
            <SubTextBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.
            </SubTextBottom>
          </BlockBottom>
        </BottomContent>
        <ButtonUpPage onClick={scrollToTop}>
          <FaArrowUp color="#FFF" />
        </ButtonUpPage>
      </ContentContainer>
    </MainContainer>
  );
}
