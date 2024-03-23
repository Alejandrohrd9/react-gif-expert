import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

interface GifData {
    id: string;
    title: string;
    url: string;
}

interface GifGridProps {
    category: string;
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Cargando...</h2>)}

            <div className="card-grid">
                {images.map((image: GifData) => (
                    <GifGridItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    );
};
