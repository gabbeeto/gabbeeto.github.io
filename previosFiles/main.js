
if (document.querySelector("html").lang == 'en') {
	document.title = `Gabriel's website`
}
else {
	document.title = `La pagina de Gabriel`
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
