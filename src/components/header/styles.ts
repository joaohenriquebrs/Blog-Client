import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background: #290742;
  height: 588px;
  padding: 70px 120px;
  border-bottom: 6px solid #4FFF4B;
`;

export const FirstHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 70px;
`;

export const LogoContainer = styled.div`
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 55px;
  align-items: center;
`;

export const MenuItem = styled.div`
  font-size: 18px;
  color: #FFF;
  display: flex;
  flex-direction: row;
`;

export const BorderName = styled.div`
  border-left: 2px solid #4FFF4B;
  width: 2px;
  height: 18px;
  margin-right: 3px;
`;

export const Strong = styled.div`
  font-weight: 700;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputSearchBar = styled.input`
  background: #170027;
  width: 230px;
  height: 100%;
  border: none;
  padding: 0px 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ButtonSearchbar = styled.button`
  background: #9E6DC2;
  width: 70px;
  height: 100%;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  svg {
    font-size: 18px; 
  }
`;

export const SecondHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MainTitle = styled.div`
  font-family: Poppins;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  text-align: left;
  color: #9E6DC2;
  width: 450px;
`;

export const SubTitle = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #FBF6FF;
  width: 410px;
`;

export const SeeMoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: #9E6DC2;
  text-decoration: none;
  transition: transform 0.3s ease;
  width: 100px;

  &:hover{
    transform: scale(1.07);
  }
`;

export const RightContent = styled.div`
`;