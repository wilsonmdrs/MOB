import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import * as S from "./styles";
import { Container } from "../components/Container";

export function DefaultLayout() {
  return (
    <>
      <S.ImageFilter />
      <Header />
      <Container height="85%">
        <Sidebar />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
