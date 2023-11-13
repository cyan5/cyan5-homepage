import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { css } from '@linaria/core'
import Home from './pages/Home.tsx'
import Works from './pages/Works.tsx'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'M PLUS Rounded 1c', 'MaterialIcons', sans-serif;
      margin: 0;
      padding: 0;
      height:100%;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');

    @font-face {
      font-family: 'M PLUS Rounded 1c', 'MaterialIcons', sans-serif;
      src: url(../assets/fonts/MaterialIcons.ttf) format('truetype');
    }
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/cyan5-homepage/" element={<Home />} />
        <Route path="/cyan5-homepage/about" element={<About />} />
        <Route path="/cyan5-homepage/works" element={<Works />} />
        <Route path="/cyan5-homepage/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
