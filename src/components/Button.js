import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

let STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
      <Link to='/sign-up' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onclick={onclick} type={type}>{children}</button>
        <Button>Começar</Button>
      </Link>
        
    )
};
