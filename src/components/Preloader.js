import React from 'react'
import { useState } from 'react';

function Preloader() {
    const [dis, setdis] = useState('block');
    window.addEventListener('load', () => {
        setTimeout(() => {
            setdis('none');
        }, 500);

    })
    return (
        <div id="preloader" style={{ display: dis }}>
        </div>
    )
}

export default Preloader