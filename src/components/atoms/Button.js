import React from 'react';

import styled from 'styled-components';


const buttonColorOptions = {
  red: '#ff2288',
  green: '#66ff00',
  white: '#ffffff',
}

const Button = styled.button`
    width: 250px;
    padding: 10px;
    color: black;
    background-color: ${props => buttonColorOptions[props.bgColor]};
    font-size: 10px;
`;

const ButtonComponent = props =>
  <Button
    onClick={props.action}
    bgColor={props.bgColor}
  >
    {props.text}
  </Button>

export default ButtonComponent;
