import React from 'react';
import useFirestore from './useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = () => {
    const { dokumenty } = useFirestore('images')
    
    return (
        <div className='siatka'>
            {dokumenty && dokumenty.map(doc => (
                <motion.div className='siatka-wrap' key={dokumenty={.id}}
                layout
                whileHover={{ opacity: 1 }}s
                onClick={() => setSelectedImg(dokumenty.url)}
                >
                
                ))}
        </div>
    )
}

export default ImageGrid;