import React from 'react';
// import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonComponent = () => {
    const Button = styled.button`
        display: inline-block;
        font-size: 2em;
        color: #1db954;
        margin: 2em;
        padding: 0.2em 5em;
        border: 2px solid #1db954;
        border-radius: 12px;
        display: block;
    `
    return (
        <div>
            <Button>BEAT IT</Button>
        </div>
    );
}

export default ButtonComponent;