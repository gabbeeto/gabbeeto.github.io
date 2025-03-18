import Lang  from "./../Lang";
import Section from './../Section';

export default function Main() {
	return (<Section content={(<>
		<h2>
			<Lang en={(<>Experience:</>)}
				es={(<>Experiencia:</>)}
			/>
		</h2>
		<p>
			<Lang en={(<>I have basic experience working with software. I know how to develop front-end websites and create games using programming languages such as <span title="Hypertext Markup Language">HTML</span>, <span title="Cascading Style Sheets">CSS</span>, JavaScript, and GDScript.</>)}
				es={(<>Tengo experiencia básica trabajando con software. Sé como desarrollar sitios web front-end y crear videojuegos utilizando lenguajes de programación como <span title="Hypertext Markup Language">HTML</span>, <span title="Cascading Style Sheets">CSS</span>, JavaScript y GDScript.</>)}
			/>
		</p>
<p>
			<Lang en={(<>I have more than six years of experience interacting with the English language, so I’m proficient enough to learn about topics beyond language learning. Spanish is my first language, but I’ve acquired all my software knowledge through English-language programming resources.</>)}
				es={(<>Tengo más de 6 años de experiencia interactuando con el idioma inglés, por lo que soy lo suficientemente bueno para aprender en inglés sobre otros temas no relacionado a los idiomas. El español es mi lengua materna, pero aprendí todo lo relacionado con software consumiendo contenido en inglés.</>)}
			/>
</p>
	</>)} />)

}
