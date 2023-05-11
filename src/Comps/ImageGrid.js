import React from 'react';
import useFirestore from './Firestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ wybrane }) => {
    const { dokumenty } = useFirestore('images')
    
    return (
        <div className='siatka'>
            {dokumenty && dokumenty.map(doc => (
                <motion.div className='siatka-wrap' key={dokumenty.id}
                layout
                whileHover={{ opacity: 1 }}s
                onClick={() => wybrane(doc.url)}
                >
                     <motion.img src={doc.url} alt="wrzucono plik"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
                ))}
        </div>
    )
}

export default ImageGrid;