import {ReactElement} from "react";

export default function SocialM({containerStyle}:{containerStyle: string}): ReactElement{
return (<section className={`${containerStyle} mt-2`}><h2 className="textSize-2">Social Media</h2>

<ul>

<li>
<a href="https://www.youtube.com/@gabbeeto" className="text-red-800 hover:text-white hover:bg-red-900 p-2 rounded-xl" target="_blank" >Youtube</a>
</li>

<li>
<a href="https://discord.gg/SRHAP2nneX" className="text-blue-800 hover:text-white hover:bg-blue-900 p-2 rounded-xl" target="_blank" >Discord</a>
</li>


<li>
<a href="https://www.instagram.com/gabbeeto27" className="text-rose-800 hover:text-white hover:bg-rose-900 p-2 rounded-xl" target="_blank" >Instagram</a>
</li>

<li>
<a href="https://www.twitch.tv/gabbeeto" className="text-purple-800 hover:text-white hover:bg-purple-900 p-2 rounded-xl" target="_blank" >Twitch</a>
</li>

</ul>
</section>)

}
