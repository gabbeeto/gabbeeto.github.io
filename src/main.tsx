import React from 'react'
import ReactDOM, {Root} from 'react-dom/client'
import './index.css'
import Header from "./Header"

const rootElement: HTMLElement | null = document.getElementById('root')!
const root: Root = ReactDOM.createRoot(rootElement)

root.render(<><h1>hello</h1>
<Header></Header></>

)
