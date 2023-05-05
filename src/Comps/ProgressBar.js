import React from 'react';
import useStorage from './useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, ProgressBar } = useStorage(file);
    console.log(progress, url);


    return (
        <div className='progress-bar'>Progres</div>
    )
}

export default ProgressBar;