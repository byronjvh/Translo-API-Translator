import { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../stylesheets/LangButton.css"
import Spinner from "./Spinner";

function LangButton({ className, fromButton, langs, isLoading, getLang, switchTo }) {
    let defaultLang = {
        name: "",
        language: ""
    }

    if(fromButton){
        defaultLang = {
            name: "Spanish",
            language: "es"
        }
    } else {
        defaultLang = {
            name: "English",
            language: "en"
        }
    }

    const [selectedLang, setSelectedLang] = useState(defaultLang)
    const [open, setOpen] = useState(false)

    const menuRef = useRef()

    useEffect(() => {
        const openHandler = (e) => {
            const menu = menuRef.current.contains(e.target)
            if(!menu) setOpen(false)
        };
        document.addEventListener("mousedown", openHandler)
    })

    useEffect(() => getLang(selectedLang), [selectedLang])

    useEffect(() => {
        if(switchTo) {
            setSelectedLang(switchTo)
        }
    }, [switchTo])

    return <div ref={menuRef} className={`langButton${className ? " " + className : ""}`} onClick={() => {setOpen(!open)}} >
        <p className="langButton__current">{selectedLang.name}</p>
        <span className={`langButton__icon${open ? " open" : ""}`}><FaChevronDown /></span>
        <ul className={`langList${open ? " visible" : ""}${isLoading ? " loading" : ""}`}>
            {
                isLoading ? <Spinner />
                : langs.map(
                    (lang) => (<li 
                        key={lang.language} 
                        className="langList__language"
                        onClick={() => {
                            setSelectedLang(lang)
                        }}>
                        {lang.name}
                    </li>))
            } 
        </ul>
    </div>
}

export default LangButton;