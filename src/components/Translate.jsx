import "../stylesheets/Translate.css"
import { FaExchangeAlt } from "react-icons/fa";
import LangButton from "./LangButton";
import WriteText from "./WriteText";
import { useEffect, useState } from "react";
import { translateText } from "../utils/translateText";
import { detectLang } from "../utils/detectLang";
import ReadText from "./ReadText";
import languages from "../languages.json"

function Translate() {
    const langs = languages
    const [fromLang, setFromLang] = useState()
    const [toLang, setToLang] = useState()
    const [text, setText] = useState("")
    const [translatedText, setTranslatedText] = useState("")
    const [detectedLang, setDetectedLang] = useState()

    const getFromLang = (lang) => setFromLang(lang)

    const getToLang = (lang) => setToLang(lang)

    const getText = (text) => setText(text)

    useEffect(() => {
        if(!text || !fromLang || !toLang){
            setTranslatedText("")
            return
        }
        const translate = async () => {
            const translatedText = await translateText(text, fromLang.language, toLang.language)
            setTranslatedText(translatedText.translated_text)
        }
        translate()
    }, [text, fromLang, toLang])

    useEffect(() => {
        if(!text || !fromLang) {
            setDetectedLang("")
            return
        }
        const detect = async () => {
            const detectedLang = await detectLang(text)
            const item = langs.find((object) => object.language === detectedLang.lang)
            
            if(item.language !== fromLang.language){ 
                setDetectedLang(item)
            } else setDetectedLang("")
        }
        detect()
    }, [text, fromLang, toLang])

    const swap = () => {
        setFromLang(toLang)
        setToLang(fromLang)
    }

    const getDetectedLang = () => setFromLang(detectedLang)

    return <div className="translateContainer">
        <div className="langChanger">
            <LangButton switchTo={fromLang} getLang={getFromLang} langs={langs} fromButton={true} />
            <button onClick={swap} className="langChanger__switch"><FaExchangeAlt className="langChanger__icon" /></button>
            <LangButton className="right" switchTo={toLang} getLang={getToLang} langs={langs} fromButton={false} />
        </div>
        <div className="textContainer">
            <WriteText fromLang={fromLang} getDetectedLang={getDetectedLang} detectedLang={detectedLang} getText={getText} />
            <ReadText text={translatedText}/>
        </div>
    </div>
}

export default Translate;