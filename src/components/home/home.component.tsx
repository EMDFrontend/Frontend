import './home.styles.scss';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';




export default function Home(){


    const [value, setValue] = useState("");

    const getInputValue = (e) => {
      setValue(e.target.value);
    };
  
    useEffect(() => {
      const timeoutId = setTimeout(() => console.log({value}), 1000);
      return () => clearTimeout(timeoutId);
    }, [value]);

    return(
        <div className ="home__main">
            <h2>Podaj swoję imię</h2>
        <input 
            type="text"
            onChange={getInputValue}
            value={value}
        />


        <p>
            Lorem ipsum dolor sit, amet adipisicing elit. Maxime provident dolore ab culpa, et beatae deleniti architecto praesentium similique omnis, iure molestias sit doloremque corrupti obcaecati accusantium sequi laudantium doloribus reiciendis dolores sapiente. Doloribus sequi perspiciatis ipsam accusantium odio eum omnis, <span>{value}</span> exercitationem reprehenderit eaque provident nesciunt commodi ex minima quo error dolore et! Eveniet laboriosam eos esse officiis consequuntur inventore quos veritatis asperiores doloribus ex odio ea dolores praesentium laudantium, iusto natus. Facilis placeat animi optio rerum numquam? Non repudiandae quam, dolores incidunt voluptatibus sequi recusandae tenetur? Perferendis, itaque voluptatibus optio, dolorum reprehenderit illum sit veniam enim sed facere nam maxime, non quo? Est expedita rem officia fugiat vitae animi atque exercitationem ipsam pariatur <span>{value}</span> consectetur harum inventore eaque maxime necessitatibus officiis, soluta, cupiditate consequatur et ex magni corporis? Dolores, molestiae reiciendis. Ipsum, aperiam sequi error eos velit rem quibusdam adipisci totam voluptatem. Sed, provident vel! Molestias et nihil aliquid ipsa minima pariatur quas placeat, animi distinctio. Fuga ut, officia officiis dolore quasi saepe eveniet dolorem optio laudantium magni omnis quia maxime rerum natus voluptates eius perferendis odio temporibus! Harum error eum suscipit iste vero adipisci modi veritatis quam quisquam? Sunt aperiam voluptatibus, atque debitis inventore et similique vel qui, dolore minima fuga optio praesentium soluta tempora ipsum voluptas cumque a culpa quaerat dolores assumenda neque saepe tenetur voluptate? Nesciunt ad ratione, expedita ipsam iusto quasi fugit suscipit quidem in, explicabo quia voluptas temporibus vitae velit fugiat distinctio! Animi iure maxime vel ipsam quia delectus veniam amet pariatur? Provident, qui, repudiandae praesentium doloribus nesciunt tempore dolorum perspiciatis ullam veniam sapiente iusto nemo dicta quis! Cupiditate expedita ad praesentium facilis officiis sit blanditiis, libero quaerat. Debitis ex accusantium ducimus vel nemo tempora sequi ut molestiae tenetur ipsum earum at dolorum accusamus maiores illum aperiam laborum eligendi dignissimos rerum sunt, autem perspiciatis similique.
        </p>

        

        </div>
    )
}

