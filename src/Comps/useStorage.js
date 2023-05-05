import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        // gdzie bedzie upload
        const storageUpload = projectStorage.ref(file.name);

        storageUpload.put(file).on('state_changed', (snap) => {
            let procent = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(procent);
        }, (err) =>{
            setError(err)
        }, async() => {
            const url = await storageUpload.getDownloadURL();
            setUrl(url);
        })
    }, [file])

    return { progress, url, error }

}

export default useStorage;