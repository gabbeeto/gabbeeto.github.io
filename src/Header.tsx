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
	return (<header className='border-white border-b-2 flex flex-column justify-center items-center gap-2 p-2'>
		<h1>
			<Lang en={(<>About Gabbeeto</>)}
				es={(<>Acerca de Gabbeeto</>)}
			/>
		</h1>
		<button onClick={changeLanguage}
			className='border-white border-2 rounded-3xl p-2'
		>
			<Lang en={(<>Cambiar a Español</>)}
				es={(<>Switch to English</>)}
			/>
		</button>
	</header>)

}
