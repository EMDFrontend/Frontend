import './home.component.scss';
import { Link } from 'react-router-dom';
// import React, { useRef, useCallback } from "react";

export default function Home(){
    return(
        <div className ="home__main">
            <h2>Home Page</h2>

            <Link to="/about">About</Link>
        </div>
    )
}

