import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {


  return (
    <>
<button className="btn btn-active">Default</button>
<button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
<button className="btn btn-active btn-info">Info</button>
<button className="btn btn-active btn-success">Success</button>
<button className="btn btn-active btn-warning">Warning</button>
<button className="btn btn-active btn-error">Error</button>
     
    </>
  )
}
