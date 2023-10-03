import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
// import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Foo from './pages/Foo.tsx'
import { css } from '@linaria/core'
import Items from './pages/Items.tsx'

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
      /* height:100%; */
    }
    
    body {
      margin: 0;
      padding: 0;
      height:100%;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    @font-face {
      font-family: 'MaterialIcons';
      src: url(../assets/fonts/MaterialIcons.ttf) format('truetype');
    }
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Foo" element={<Foo />} />
        <Route path="/Items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
