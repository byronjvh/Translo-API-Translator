export function translateText(text, sourceLang, targetLang){
    const encodedParams = new URLSearchParams();
    encodedParams.append("from", sourceLang);
    encodedParams.append("to", targetLang);
    encodedParams.append("text", text);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '5da1e5f960msh95b460534b841edp10aad7jsnd97984e4d074',
            'X-RapidAPI-Host': 'translo.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    return fetch('https://translo.p.rapidapi.com/api/v3/translate', options)
	    .then(response => response.json())
}