import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

interface GifData {
    id: string;
    title: string;
    url: string;
}

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<GifData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getImages = async () => {
        try {
            const newImages: GifData[] = await getGifs(category);
            setImages(newImages);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching GIFs:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getImages();
    }, [category]);

    return {
        images,
        isLoading
    };
};
