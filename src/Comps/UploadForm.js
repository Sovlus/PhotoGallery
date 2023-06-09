//nie ruszać

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


//all

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  
    const typy = ['image/png', 'image/jpeg'];
  
    const handleChange = (e) => {
      let selected = e.target.files[0];
  
      if (selected && typy.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Proszę wybierz plik z rozszerzeniem .png lub .jpeg');
      }
    };
  
    return (
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    );
  }
 

export default UploadForm;