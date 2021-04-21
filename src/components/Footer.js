import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    padding: ${props => props.theme.paddings.smallest};
    background-color: ${props => props.theme.green.light};
    font-size: 25px;
`;

const Footer = () => (
    <FooterContainer>
        <p>Footer</p>
    </FooterContainer>
)

export default Footer;
