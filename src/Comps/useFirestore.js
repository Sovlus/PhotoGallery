import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [dokumenty, setDocs] =useState ([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('Stworzono', 'najnowsze')
        .onSnapshot((snap) => {
             let documents = [];
             snap.forEach(doc => {
                documents.pust({...doc.data(), id: doc.id})
             });
             setDocs(documents)
        })
    }, [collection])

    return { dokumenty };
}