import WhatIlike from './Content/WhatIlike'
import AboutMe from './Content/AboutMe'

export default function Main() {
	return (<main className="flex flex-col justify-center items-center text-center gap-4 p-2">
					<WhatIlike/>
					<AboutMe/>
	</main>)

}
