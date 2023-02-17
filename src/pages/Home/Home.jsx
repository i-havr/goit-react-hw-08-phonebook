import {
  HomeStyled,
  SectionStyled,
  ContainerStyled,
  TextWrapperStyled,
  LinkStyled,
} from './Home.styled';
import { ImageWrapper } from 'components/ImageWrapper/ImageWrapper';

export default function Home() {
  return (
    <HomeStyled>
      <SectionStyled>
        <ContainerStyled>
          <ImageWrapper />
          <TextWrapperStyled>
            <p>
              Already with us?{' '}
              <LinkStyled to={'/login'}>
                <b>Log in!</b>
              </LinkStyled>
            </p>
            <p>
              Not yet?{' '}
              <LinkStyled to={'/register'}>
                <b>Sign up!</b>
              </LinkStyled>
            </p>
          </TextWrapperStyled>
        </ContainerStyled>
      </SectionStyled>
    </HomeStyled>
  );
}
