import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background: #290742;
  height: 588px;
  padding: 70px 120px;
  border-bottom: 6px solid #4fff4b;

  @media (min-width: 1000px) and (max-width: 1200px) {
    padding: 60px 90px;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    padding: 40px 70px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    padding: 30px 60px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    padding: 30px 50px;
  }

  @media (max-width: 400px) {
    padding: 20px 25px;
  }
`;

export const FirstHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 70px;

  @media (max-width: 1200px) {
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    margin-bottom: 50px;
  }

  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

export const LogoContainer = styled.div``;

export const MenuContainer = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 55px;

  @media (min-width: 1200px) and (max-width: 1400px) {
    gap: 35px;
  }

  @media (max-width: 1200px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 100px;
    right: 85px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    z-index: 10;
    background: rgba(158, 109, 194, 0.85);
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    right: 65px;
    top: 90px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    right: 55px;
    top: 80px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    right: 45px;
    top: 70px;
    gap: 15px;
  }

  @media (max-width: 400px) {
    right: 22px;
    top: 60px;
    gap: 15px;
  }
`;

export const MenuItem = styled.a`
  font-size: 18px;
  color: #fff;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.07);
  }
`;

export const MenuItemBorder = styled.a`
  font-size: 18px;
  color: #fff;
  display: flex;
  flex-direction: row;
  border-left: 2px solid #4fff4b;
  padding-left: 3px;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.07);
  }
`;

export const Strong = styled.div`
  font-weight: 700;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const InputSearchBar = styled.input`
  background: #170027;
  width: 230px;
  height: 44px;
  border: none;
  padding: 0px 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #fff;

  @media (min-width: 1000px) and (max-width: 1200px) {
    width: 380px;
    height: 40px;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    width: 280px;
    height: 35px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    width: 180px;
    height: 30px;
  }
`;

export const ButtonSearchbar = styled.button`
  background: #9e6dc2;
  width: 70px;
  height: 44px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  svg {
    font-size: 18px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    height: 40px;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    width: 40px;
    height: 35px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const SecondHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 30px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const MainTitle = styled.div`
  font-family: Poppins;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  text-align: left;
  color: #9e6dc2;
  max-width: 850px;

  @media (min-width: 1200px) and (max-width: 1400px) {
    max-width: 620px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 14px;
    line-height: 24px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
`;

export const SubTitle = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #fbf6ff;
  max-width: 510px;

  @media (min-width: 1000px) and (max-width: 1400px) {
    font-size: 17px;
    line-height: 22px;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
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
  color: #9e6dc2;
  text-decoration: none;
  transition: transform 0.3s ease;
  width: 100px;

  &:hover {
    transform: scale(1.07);
  }
`;

export const RightContent = styled.div`
  width: 570px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #fff;
  font-size: 24px;

  @media (max-width: 1200px) {
    display: block;
  }
`;
