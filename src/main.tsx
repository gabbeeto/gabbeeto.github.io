import {StrictMode} from 'react'
import {createRoot, Root} from 'react-dom/client'
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


const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}


const root = createRoot(rootElement);

export  function renderHTML(): void {
		root.render(<>
			<Header></Header>
			<Main></Main>
		</>)
	}

renderHTML()
