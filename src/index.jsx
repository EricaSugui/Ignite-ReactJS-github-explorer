import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('root')
const cRoot = createRoot(container)
cRoot.render(<App/>)
