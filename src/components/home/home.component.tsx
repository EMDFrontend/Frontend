import './home.styles.scss';
import React, { useState, useEffect } from 'react';
import HomeText from './home.text';

export default function Home(){


    const [value, setValue] = useState<string>("");
    const [visibility, setVisibility] = useState<boolean>(false);

    const getInputValue = (e) => {
        setValue(e.target.value);
    };

    const setMe = () => {
        setVisibility(!visibility);
    }


    return(
        <div className ="home__main" >
            <div className="home__main--input" style={ visibility ? { display: 'none'} : {display: 'inline-block'} }>
                <h2>Podaj swoje imię</h2>
                <input 
                    type="text"
                    onChange={getInputValue}
                    value={value}
                />
                <button onClick={setMe}>Dalej</button>
            </div>
         
           

            { visibility &&(
                 <HomeText 
                 value = {value}
                 />
            )}

        </div>
    )
}

