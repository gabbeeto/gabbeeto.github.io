

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
    new MSG("whatIlikeTitle", ["What I like:", "Lo que me gusta:"]),
    new MSG("aboutMeDescriptionTitle", ["Experience:", "Experiencia:"]),
    new MSG("whatILike", ["I like to push my limits when it comes to learning—I always strive to improve. I enjoy programming, math, and working with software in general. When I was a kid, I learned how to edit YouTube videos, so my passion for software started at an early age. I'm curious about almost everything.", "Me gusta superar mis límites cuando se trata de aprender; siempre busco mejorar. Disfruto de la programación, las matemáticas y trabajar con software en general. Cuando era niño, aprendí a editar videos de YouTube, así que mi pasión por el software comenzó a una edad temprana. Tengo curiosidad por casi todo."]),
    new MSG("aboutMeDescription", [`I have basic experience working with software. I know how to develop front-end websites and create games using programming languages such as <span title="Hypertext Markup Language">HTML</span>, <span title="Cascading Style Sheets">CSS</span>, JavaScript, and GDScript.`, `Tengo experiencia básica trabajando con software. Sé como desarrollar sitios web front-end y crear videojuegos utilizando lenguajes de programación como <span title="Hypertext Markup Language">HTML</span>, <span title="Cascading Style Sheets">CSS</span>, JavaScript y GDScript.`]),
    new MSG("aboutMeDescription2", [`I have more than six years of experience interacting with the English language, so I’m proficient enough to learn about topics beyond language learning. Spanish is my first language, but I’ve acquired all my software knowledge through English-language programming resources.`, `
Tengo más de 6 años de experiencia interactuando con el idioma inglés, por lo que soy lo suficientemente bueno para aprender en inglés sobre otros temas no relacionado a los idiomas. El español es mi lengua materna, pero aprendí todo lo relacionado con software consumiendo contenido en inglés.`]),
    new MSG("langButton", [`Switch to Spanish`, `Cambiar a Inglés`]),
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
