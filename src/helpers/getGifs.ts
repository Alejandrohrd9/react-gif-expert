interface GifData {
    id: string;
    title: string;
    images: {
        downsized_medium: {
            url: string;
        };
    };
}
export const getGifs = async(category:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=suoVinjdy5VhanNXx3g8cBUxWamRNSOm&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (img: GifData) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}