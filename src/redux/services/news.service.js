export const getNewsByApi = async (query = "all") => {
    let response =  await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=8356a3176673446d9993b1ec3a8233cd`)

    let data = await response.json();

    if(data.status === "ok") {
        return data.articles;
    }
    
    return []
}