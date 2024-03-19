import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./Header"
import {Main} from './Main/Main'

const rootElement = document.querySelector('body')!
const root = ReactDOM.createRoot(rootElement)

root.render(<div className="bg-gradient-to-r from-emerald-300 to-cyan-300">
<Header />
<Main />
</div>
)
