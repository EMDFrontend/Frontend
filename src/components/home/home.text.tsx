import './home.styles.scss';
import React, { useState, useEffect } from 'react';


interface IText {
    value: string;
}

export default function HomeText(props: IText){
    const { value } = props;

    return(
        <div className='text-div'>

            <h3>Hi! { value }</h3>
            <p>
                Lorem ipsum dolor sit, amet adipisicing elit. Maxime provident dolore ab culpa, et beatae deleniti architecto, sapiente. Doloribus sequi <span>{ value }</span> perspiciatis ipsam accusantium odio eum omnis, exercitationem reprehenderit eaque provident nesciunt commodi ex minima quo error dolore et! Eveniet laboriosam eos esse officiis consequuntur. Reprehenderit illum sit veniam enim sed facere nam maxime, <span> { value } </span> non quo? Est expedita rem officia fugiat vitae animi atque exercitationem ipsam pariatur consectetur harum inventore eaque maxime necessitatibus officiis, soluta, cupiditate consequatur et ex magni corporis? Dolores, molestiae reiciendis. Ipsum, aperiam sequi error eos velit rem quibusdam adipisci totam voluptatem. Sed, provident vel! Molestias et nihil aliquid ipsa minima pariatur quas placeat, animi distinctio. Fuga ut, officia officiis dolore quasi saepe eveniet dolorem optio laudantium magni omnis quia maxime rerum natus voluptates eius perferendis odio temporibus!
            </p>     
        </div>
    )
}

