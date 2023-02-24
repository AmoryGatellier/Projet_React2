import React from 'react';
import { apiContext } from './recherchefilm';
import { useContext } from 'react';

function Backg() {
    const donn = useContext(apiContext)

    return (
        <>
            <img id='bg' src={require('../assets/therock.png')} />
        </>
    )
}

export default Backg;