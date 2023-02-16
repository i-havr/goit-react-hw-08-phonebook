import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppStyled } from 'components/App/App.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
// import { NavLinkStyled } from 'components/Header/Header.styled';

export default function Layout() {
  return (
    <AppStyled>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </AppStyled>
  );
}
