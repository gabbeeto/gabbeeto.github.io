import {createRoot} from 'react-dom/client'
import Header from './Header'
import Main from './MainElement'
import './index.css'

declare global {
	interface Window {
		lang: string;
	}
}


let spanishInWebsite: Boolean = false
for (let currentLang of navigator.languages) {
	console.log(currentLang)
	console.log(currentLang.startsWith('es'))

	if (currentLang.startsWith('es')) {
		spanishInWebsite = true
	}
}

console.log(spanishInWebsite)


if (spanishInWebsite) {
	document.querySelector("html")!.lang = 'es'
}
else {
	document.querySelector("html")!.lang = 'en'
}

window.lang = document.querySelector("html")!.lang
const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error("Root element not found");
}


const root = createRoot(rootElement);

export function renderHTML(): void {
	root.render(<>
		<Header></Header>
		<Main></Main>
	</>)
}

renderHTML()
