import { createRoot } from 'react-dom/client'
import "./index.css"

const rootElement = createRoot(document.getElementById('root')); 

rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
