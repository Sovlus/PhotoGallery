import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const Firestore = (collection) => {
    const [dokumenty, setDocs] =useState ([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('Stworzono', 'najnowsze')
        .onSnapshot((snap) => {
             let documents = [];
             snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
             });
             setDocs(documents)
        });

        return () => unsub();
    }, [collection])

    return { dokumenty };
}

export default Firestore;