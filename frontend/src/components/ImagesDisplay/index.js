import React from 'react';

import './styles.css'

const Form = ({ images }) => {

  return (
    <>
        {images.length === 0 && (<p>url</p>)}

        {images.length >= 1 && (
                images.map((image) => {
                    console.log(image)
                    return (
                        <div key={image.alt}>
                            <h3>{image.src}</h3>
                            <span>{image.alt}</span>
                        </div>
                    )
                }) 
        )}

    </>
  );
};

export default Form;