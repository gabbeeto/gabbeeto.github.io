import {ReactElement} from "react";
import About from "./About"
import Schedule from "./Schedule"

export function Main(): ReactElement{
let containerStyle: string = "bg-cyan-800 hover:bg-gradient-to-r to-emerald-800 from-cyan-800 text-center text-white rounded-2xl p-2 max-w-max containerExtras"

return (
<main className="flex flex-col justify-center items-center gap-2 ">
<About containerStyle={containerStyle} />
<Schedule containerStyle={containerStyle} />
</main>
)
}
