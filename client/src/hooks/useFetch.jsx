import react, { useState, useEffect } from 'react'


const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifyUrl, setGifyUrl] = useState('');

    const fetchGifs = async () => {
        try {
            //const response = await fetch(`api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=1`);
            const { data } = await response.json();

            setGifyUrl(data[0]?.images?.downsized_meduim.url)
           // setGifUrl(data[0]?.images?.downsized_medium.url);

      
        } catch (error) {
            setGifyUrl('https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif')
        }
    }

    useEffect(() => {
       if (keyword) fetchGifs();
    }, [keyword])

    return gifyUrl;
}

export default useFetch;