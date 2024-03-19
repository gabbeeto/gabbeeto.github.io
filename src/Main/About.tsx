import {ReactElement} from "react";

export default function About({containerStyle}:{containerStyle: string}): ReactElement{
return (<section className={`${containerStyle} mt-2`}><h2 className="textSize-2">My story:</h2>
<p className="textSize-3">I've been learning English for more than 6 years for fun
and for the last year I was learning how to code. I'm able to make websites but I realized I liked videogames way more than making websites so I learned how to use godot and I learned the gdscrit language until a big accident happened to me. I couldn't continue to make games because my computer is broken so I decided to adventure myself into teaching English
</p>
</section>)

}
