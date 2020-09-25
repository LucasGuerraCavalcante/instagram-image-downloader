import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css'

const Form = ({ setImages }) => {

    const [url, setUrl] = useState('');
    const [inputData, setInputData] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3333/?url=${url}`)
            .then(response => {
                console.log(response);
                const images = response.data.map(image => image);
                setImages(images);
            })
            .catch(err => console.error(err));
    }, [url]);

    function inputChange(event) {
        const inputValue = event.target.value;
        setInputData(inputValue);
    }

    function formSend(event) {
        event.preventDefault();
    
        const formUrl = inputData;
        setUrl(formUrl);
    }

  return (
    <div className="formContainer">

      <div className="titleWrapper">
            <h1>
              Instagram image downloader
            </h1>
            <span>
              Url image based search
            </span>
      </div>

      <div className="formWrapper">
        <form className="form" onSubmit={ formSend } >     
              <input 
                type="text" 
                id="urlInput" 
                placeholder="Instagram image url" 
                value={ inputData }
                onChange={ inputChange }
            />

              <button 
                type="submit"
              >
                Search
              </button>  
        </form>
      </div>

    </div>
  );
};

export default Form;