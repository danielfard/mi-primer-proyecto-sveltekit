
export const load = async () => {
    //hacemos pegadas a diferentes apis
    //transformamos la data a como le sirve al archivo cliente
    //retornar
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        posts
    }
}
