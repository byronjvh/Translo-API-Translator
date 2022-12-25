export function detectLang(text) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5da1e5f960msh95b460534b841edp10aad7jsnd97984e4d074',
            'X-RapidAPI-Host': 'translo.p.rapidapi.com'
        }
    };
    
    return fetch(`https://translo.p.rapidapi.com/api/v3/detect?text=${text}`, options)
        .then(response => response.json())
}