import React, { useState } from 'react';
import { AddCat } from './components/AddCat'
import { GifGrid } from './components/GifGrid';

export default () => {

    const [cats, setCats] = useState([''])

    /* const handleAdd = (e) => {
        setCats(c => [...c, "Mario Bros"])
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCat setCats={setCats} />
            <hr/>
            
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <div>
                {
                cats.map(cat => (
                    <GifGrid
                        key={cat}
                        cat={cat}
                     />)
                )
                }
            </div>
        </>
    )
}