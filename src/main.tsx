import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
// import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { css } from '@linaria/core'
import Works from './pages/Works.tsx'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'

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
        <Route path="/cyan5-homepage/" element={<Home />} />
        <Route path="/cyan5-homepage/About" element={<About />} />
        <Route path="/cyan5-homepage/Works" element={<Works />} />
        <Route path="/cyan5-homepage/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
