import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ToastContainer autoClose={1500} />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
