import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('root') as HTMLElement
const cRoot = createRoot(container)
cRoot.render(<App/>)
