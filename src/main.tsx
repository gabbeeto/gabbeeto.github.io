import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import Main from './MainElement'
import './index.css'

declare global {
  interface Window {
    lang: string;
  }
}


if (navigator.language.startsWith('es')) {
	document.querySelector("html")!.lang = 'es'
}
else {
	document.querySelector("html")!.lang = 'en'
}


console.log(window.lang)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<Header></Header>	
	<Main></Main>
  </StrictMode>,
)
