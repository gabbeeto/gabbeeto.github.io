import Lang from './Lang'
import {renderHTML} from './main';

function changeLanguage() {
	if (window.lang == 'es') {
		window.lang = 'en';
		document.querySelector("html")!.lang = 'en'
	}
	else {
		window.lang = 'es';
		document.querySelector("html")!.lang = 'es'
	}
	renderHTML()
}

export default function Header() {
	return (<header>
		<h1>
			<Lang en={(<>About Gabbeeto</>)}
				es={(<>Acerca de Gabbeeto</>)}
			/>
		</h1>
		<button onClick={changeLanguage}>
			<Lang en={(<>Cambiar a Español</>)}
				es={(<>Switch to English</>)}
			/>
		</button>
	</header>)

}
