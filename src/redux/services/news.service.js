export const getNewsByApi = async (query = "all") => {
    let response =  await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=767e23e7d54342359a0e74402673dd50`)

    let data = await response.json();

    if(data.status === "ok") {
        return data.articles;
    }
    
    return []
}