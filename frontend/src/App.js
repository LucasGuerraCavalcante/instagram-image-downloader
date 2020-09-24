import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import ImagesDisplay from './components/ImagesDisplay';

function App() {

  const [images, setImages] = useState([]);

  return (
    <div className="App">
        Hello

        <Form 
          setImages={setImages}
        />

        <ImagesDisplay 
          images={images}
        />
    </div>
  );
}

export default App;
