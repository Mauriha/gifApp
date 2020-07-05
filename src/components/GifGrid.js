import React from 'react'
import { GifGridItem } from './GifGridItem'
import useFetchGifs from '../hooks/useFetchGifs'

export const GifGrid = ({cat}) => {
    
    const {data: imgs, loading} = useFetchGifs(cat)

    return (
        <>
           <h3>{cat}</h3>
           <p>{loading && 'Cargando...'}</p>
           <div className="card-grid animate__animated animate__fadeInUp animate__faster">
               {
                   imgs.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
               }
           </div>
        </>
    )
}
