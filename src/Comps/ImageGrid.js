import React from 'react';
import useFirestore from './useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = () => {
    const { dokumenty } = useFirestore('images')
    return (
        <div className='siatka'>
            zdjecia
        </div>
    )
}

export default ImageGrid;