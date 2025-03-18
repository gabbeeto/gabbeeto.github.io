import Lang, {LangT} from "./../Lang";
import Section from './../Section';
import me from './../assets/me.png';

export default function Main() {
	return (<Section content={(<>
			<h2>
				<Lang en={(<>What I like:</>)}
							es={(<>Lo que me gusta:</>)}
				 />
			</h2>
			<div>
			<p>

				<Lang en={(<>I like to push my limits when it comes to learning—I always strive to improve. I enjoy programming, math, and working with software in general. When I was a kid, I learned how to edit YouTube videos, so my passion for software started at an early age(even though I was not actually doing anything related to programming). I'm curious about almost everything.</>)}
							es={(<>Me gusta superar mis límites cuando se trata de aprender; siempre busco mejorar. Disfruto de la programación, las matemáticas y trabajar con software en general. Cuando era niño, aprendí a editar videos de YouTube(incluso si no estaba haciendo nada relacionado a la programación en realidad). Así que mi pasión por el software comenzó a una edad temprana. Tengo curiosidad por casi todo.</>)}
				 />

			</p>
			<img width='200px' height='100px' src={me} alt={LangT("a picture of me", "una foto de mi")}/>
			</div>
		</>)} />)

}
