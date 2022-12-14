import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack } from '@mui/material'
import NavBar from './components/NavBar';
import RightBar from './components/RightBar';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme';
import { Box } from '@mui/material';
import { Stripe } from './components/Stripe';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/products" element={<Product />} />
    //   </Routes>
    // </BrowserRouter>
    // <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <SideBar />
        <Main />
        <RightBar />
      </Stack>
      <Stripe />
    </Box>
    // </ThemeProvider>
  );
}

export default App;
