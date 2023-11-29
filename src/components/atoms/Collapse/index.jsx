import "./style.scss";
import { useState } from 'react';
import arrow from '../../../assets/images/arrow.svg';

export default function Collapse({ title, content }) {

    const [toggle, setToggle] = useState(false);

    var formattedContent = content;

    if (Array.isArray(content)) {
        formattedContent = content.map((line, index) => (
            <p key={index}>
                {line}
                <br />
            </p>
        ));
    }

    return (
        <div className="collapse" >
            <div className='collapse__header'>
                <h3 className="collapse__title">
                    {title}
                </h3>
                <img
                    className={'collapse__arrow ' + (toggle ? '' : 'collapse__arrow--open')}
                    src={arrow}
                    alt="show content"
                    onClick={() => setToggle(!toggle)}
                />
            </div>
            <div className={'collapse__content ' + (toggle ? '' : 'collapse__content--hidden')}>
                {formattedContent}
            </div>
        </div>
    )
}