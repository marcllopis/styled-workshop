import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.div`
    width: 100%;
    padding: ${props => props.theme.paddings.smallest};
    background-color: ${props => props.theme.blue.light};
    font-size: 25px;
`;

const Navbar = () => (
    <NavContainer>
        <p>NAVBAR</p>
    </NavContainer>
)

export default Navbar;