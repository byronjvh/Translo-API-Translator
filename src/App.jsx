import { useEffect, useState } from "react"
import "./App.css"
import Translate from "./components/Translate"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const body = document.body
    if(!body) {
      return 
    }
    if(darkMode) body.classList.add("dark")
    if(!darkMode) body.classList.remove("dark")
  }, [darkMode])

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Traductor</h1>
        <div className={`themeSwitcher${darkMode ? " dark" : ""}`} onClick={() => setDarkMode(prev => !prev)}>
          <span className="themeSwitcher_circle">
            <svg className="sun icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.36 383.36" width="25" height="25"><title>sunRecurso 1</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><circle cx="191.68" cy="191.68" r="125.71"/><circle cx="191.68" cy="21.99" r="21.99"/><circle cx="71.69" cy="71.69" r="21.99"/><circle cx="21.99" cy="191.68" r="21.99"/><circle cx="71.69" cy="311.67" r="21.99"/><circle cx="191.68" cy="361.37" r="21.99"/><circle cx="311.67" cy="311.67" r="21.99"/><circle cx="361.37" cy="191.68" r="21.99"/><circle cx="311.67" cy="71.69" r="21.99"/></g></g></svg>
            <svg className="moon icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.35 383.35" width="25" height="25"><title>moonRecurso 2</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className="cls-1" d="M238.84,0a195,195,0,0,1,6.64,50.49c0,107.69-87.3,195-195,195A195,195,0,0,1,0,238.84c22.25,83.22,98.13,144.51,188.36,144.51,107.69,0,195-87.3,195-195C383.35,98.13,322.06,22.25,238.84,0Z"/></g></g></svg>
          </span>
        </div>
      </header>
      <Translate />
      <footer className="footer"><span>Traductor web usando <a target="_blank" className="footer__link" href="https://rapidapi.com/armangokka/api/translo">Translo API</a> por <a className="footer__link" href="https://github.com/byronjvh" target="blank_">Byron</a></span></footer>
    </div>
  )
}

export default App
