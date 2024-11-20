import {ReactElement} from "react";

export default function About({containerStyle}:{containerStyle: string}): ReactElement{
return (<section className={`${containerStyle} mt-2`}><h2 className="textSize-2">About me</h2>

<p>I'm Gabbeeto. lately I've been learning about blender and hopefully I'll be able to push my own limits.</p>
<p>I only have time available when I'm streaming on <a className="text-purple-800 textSize-4" href="https://www.twitch.tv/gabbeeto" target="_blank" >twitch</a> but I'll definitely be on discord available and I'll be making Youtube videos for sure!</p>
</section>)
}
