import { useState, useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { useDebounce } from "../hooks/useDebounce";
import "../stylesheets/WriteText.css"

function WriteText({ getText, detectedLang, getDetectedLang, fromLang}) {
    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState()
    const [focus, setFocus] = useState(false);

    const debouncedValue = useDebounce(inputValue, 800)

    const onChangeValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        inputRef.current.focus()
        setFocus(true)
    }

    const boxRef = useRef()

    useEffect(() => {
        const openHandler = (e) => {
            const box = boxRef.current.contains(e.target)
            if(!box) setFocus(false)
        };
        document.addEventListener("mousedown", openHandler)
    })

    useEffect(() => {
        const element = inputRef.current
        if (element) {
            element.style.height = "50px"
            const taHeight = element.scrollHeight
            element.style.height = taHeight + "px"
        }
    }, [inputValue])

    useEffect(() => {
        getText(debouncedValue)
    }, [debouncedValue])

    return <div ref={boxRef} className={`writebox${focus ? " focus" : ""}`} onClick={handleClick}>
        <span onClick={() => {setInputValue("")}} className={`writebox__delete${inputValue ? " visible" : ""}`}><HiX /></span>
        <textarea 
            value={inputValue}
            onChange={onChangeValue}
            placeholder="Escribe algo..."
            ref={inputRef}
            className="writebox__input">
        </textarea>
        <span onClick={getDetectedLang} className={`writebox__detect${(detectedLang && fromLang) ? (fromLang.name !== detectedLang.name) ? " visible" : "" : ""}`}>Traducir del <b style={{fontWeight: 600}}>{detectedLang ? detectedLang.name : ""}</b></span>
    </div>
}

export default WriteText;