import React from "react";
import { useState } from "react";
import handleLoad from './auth';
import '.././App.css';





document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementsByClassName('loadButton');
    loadButton.addEventListener('click', function() {
        console.log('Bus tag loaded successfully!')
    })
})


const loaded = () => {

    return(
        <body>
            <div className="load">
                <h1> Bus tag loaded successfully </h1>
            </div>
        </body>
    )
}
