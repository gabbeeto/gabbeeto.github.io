import {ReactElement} from "react";

export default function About({containerStyle}:{containerStyle: string}): ReactElement{
return (<section className={`${containerStyle} mt-2`}><h2 className="textSize-2">About me</h2>

<p> I'm a spanish speaker who happened to learn english when I was a teenager. I tried to make websites, make games again and now I'm back to making websites all over again? </p>
<p>I'm looking to get into the software industry as well so if you hire someone.. I'm available </p>
<p>I only have time available when I'm streaming on <a className="text-purple-800 textSize-4" href="https://www.twitch.tv/gabbeeto" target="_blank" >twitch</a> but I'll definitely be on discord available</p>
</section>)

}
