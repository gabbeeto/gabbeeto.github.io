import {ReactElement} from "react";

export default function About({containerStyle}:{containerStyle: string}): ReactElement{
return (<section className={`${containerStyle} mt-2`}><h2 className="textSize-2">About me</h2>

<p> I'm a spanish speaker who happened to learn english when I was a teenager. I'm a loser who want to get better at life. I'm currently developing a game in my free time and I'm usually busy on my job and finishing highschool </p>
<span className="text-red-800 textSize-5 ">(this dude is an adult and didn't even finish highschool)</span>
<p>I'm slowly making a horror game but it'll take time since I only have time available when I'm streaming on <a className="text-purple-800 textSize-4" href="https://www.twitch.tv/gabbeeto" target="_blank" >twitch</a></p>
</section>)

}
