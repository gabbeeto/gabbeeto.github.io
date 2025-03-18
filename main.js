if (navigator.language.startsWith('es')) {
	document.querySelector("html").lang = 'es'
}
else {
	document.querySelector("html").lang = 'en'
}


if (document.querySelector("html").lang == 'en') {
	document.title = `gabbeeto's website`
}
else {
	document.title = `la pagina de gabriel`
}

const langButton = document.querySelector('#langButton')
langButton.addEventListener('click', switchLanguage)

function switchLanguage() {
	// switches languages
	let languageIsEnglish = document.querySelector("html").lang == 'en'
	if (languageIsEnglish) {
		document.querySelector("html").lang = 'es'
	}
	else {
		document.querySelector("html").lang = 'en'
	}

	// update the messages for all the elements
	for (let currentMSG of list) {
		currentMSG.updt()
	}
}
