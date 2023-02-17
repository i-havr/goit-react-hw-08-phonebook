import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppStyled } from 'components/App/App.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

export default function Layout() {
  return (
    <AppStyled>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </AppStyled>
  );
}
