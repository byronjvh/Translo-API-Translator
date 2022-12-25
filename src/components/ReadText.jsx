import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../stylesheets/ReadText.css"

function ReadText({ text }) {
    const [copied, setCopied] = useState(false)

    const popupTime = (time) => {
        setTimeout(() => setCopied(false), time)
    }
    return <div className="textbox">
        <span className={`textbox__placeholder${text ? " hide": ""}`}>Traducción</span>
        <div className="textbox__text">
            {text}
        </div>
        <span 
            onClick={() => {
                if(!text) {
                    return
                }
                navigator.clipboard.writeText(text)
                setCopied(true)
                popupTime(3000)
            }}
            className="textbox__copy"><FaRegCopy />
        </span>
        <span className={`textbox__copy--popup${copied ? " show" : ""}`}><FaCheck /> Copiado al portapapeles</span>
    </div>
}

export default ReadText;