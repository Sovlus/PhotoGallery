import React from 'react';
import useFirestore from '../Comps/useFirestore';

const ImageGrid = () => {
    const { dokumenty } = useFirestore('images')
    return (
        <div className='siatka'>
            zdjecia
        </div>
    )
}

export default ImageGrid;