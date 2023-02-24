import React, { createContext, useEffect, useState } from 'react';

export const apiContext = createContext()

function RechercheFilm(props) {
  const key ='681400f5'
  const [val, setVal] = useState('');
  const [donn, setDonn] = useState();
 /* `https://www.omdbapi.com/?apikey=${key}&t=${val}` */
      useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${key}&t=${val}`)
        .then((response) => response.json())
        .then((data) => {;
          setDonn(data);
       })
      }, [val])

  return (
    <apiContext.Provider value={{setVal, donn}}>
      {props.children}
    </apiContext.Provider>
  );
}

export default RechercheFilm;