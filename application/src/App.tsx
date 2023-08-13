import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes/default";
import GlobalStyle from "./styles/global";
import { Container } from "./components/Container";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Voice } from "./pages/Voice";
import { History } from "./pages/History";
import { Routes, Route } from "react-router";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      < Container direction="column" overflow="hidden">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/chat/message" element={<Chat />} />
                <Route path="/chat/voice" element={<Voice />} />
                <Route path="/chat/history" element={<History />} />
          </Route>
        </Routes>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
