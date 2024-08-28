import {ReactElement} from "react";
import About from "./About"
import Schedule from "./Schedule"
import SocialM from "./SocialMedia"

export function Main(): ReactElement{
let containerStyle: string = "goodColors  text-center text-black rounded-2xl p-2 max-w-max containerExtras"
// bg-cyan-800 hover:bg-gradient-to-r to-emerald-800 from-cyan-800
return (
<main className="goodColorsButDark flex flex-col justify-center items-center gap-2 ">
<About containerStyle={containerStyle} />
<SocialM containerStyle={containerStyle} />
<Schedule containerStyle={containerStyle} />
</main>
)
}
