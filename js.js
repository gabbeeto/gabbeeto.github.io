

if(navigator.language.startsWith('es')){
    document.querySelector("html").lang = 'es'
}
else{
    document.querySelector("html").lang = 'en'
}

class MSG{
constructor(id, messages){
    this.obj = document.querySelector(`#${id}`)
    this.eng = messages[0]
    this.es = messages[1]

    if(document.querySelector("html").lang == 'en'){
    this.obj.innerHTML = this.eng
    }
    else{
    this.obj.innerHTML = this.es
    }
}
updt(){
    if(document.querySelector("html").lang == 'en'){
    this.obj.innerHTML = this.eng
    }
    else{
    this.obj.innerHTML = this.es
    }
}

}

    if(document.querySelector("html").lang == 'en'){
    document.title = `gabbeeto's website`
    }
    else{
    document.title = `la pagina de gabriel`
    }

const list = [
    new MSG("title", ["About Gabbeeto", "Acerca de Gabbeeto"]),
    new MSG("aboutMeDescription", [`I have basic experience dealing with software. I know how to make front-end websites and make games with programming languages like; <abbr title="Hypertext Markup Language"> HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, JavaScript and GDscript.`, `Tengo experiencia basica lideando con software. se como hacer sitios web front-end y hacer videojuegos con lenguajes de programacion como; <abbr title="Hypertext Markup Language"> HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, JavaScript y GDscript.`]),
    new MSG("aboutMeDescription2", [`I have more than 6 years of experience interacting with the English language so I'm good enough to educate myself from other topics that are not related to language learning. Spanish is my first language but I've gotten all the software knowledge by interacting with English sources that are related to programming`, `tengo mas de 6 anios de experiencia interactuando con el idioma ingles asi que soy lo suficientemente bueno como para educarme sobre otros temas no relacionado al lenguaje usando ingles. espaniol es mi primer idioma pero aprendi todo lo relacionado a software consumiendo contenido en ingles`]),
    new MSG("langButton", [`Switch to Spanish`, `cambiar a ingles`]),
]

const langButton = document.querySelector('#langButton')
langButton.addEventListener('click', switchLanguage)

function switchLanguage(){
	// switches languages
	let languageIsEnglish = document.querySelector("html").lang == 'en'
	if(languageIsEnglish){
	document.querySelector("html").lang = 'es'
	}
	else{
	document.querySelector("html").lang = 'en'
	}

	// update the messages for all the elements
	for(let currentMSG of list){
		currentMSG.updt()
	}
}
