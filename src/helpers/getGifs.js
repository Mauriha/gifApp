export default async( cat ) => {
    try{
        const proto = 'https://'
        const url = proto + `api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=10&api_key=Bsn3u986SGV4i4xWd26SeJMZaDe5FN1f`
        const resp = await fetch(url)
        const {data} = await resp.json()
        
        const gifs = data.map( ({id, title, images}) => {
            return {
                id,
                title,
                url: images?.downsized_medium.url
            }
        })
        return gifs
    }
    catch(err){
        console.log(err)
    }
}