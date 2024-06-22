import Header from 'components/header';
import {
  MainContainer, SizeContainer
} from './style';
import Image from 'next/image';

export default function Home() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}