import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './atoms/Button';

const ContentContainer = styled.div`
    width: 100%;
    padding: ${props => props.theme.paddings.medium};
    color: black;
    background-color: ${props => props.theme.grey.subtle};
    font-size: 15px;
`;


const Content = () => (
  <ContentContainer>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lobortis arcu, eget tempus magna. Nulla et sollicitudin tortor. Phasellus consectetur accumsan tellus quis vehicula. Vivamus posuere sit amet ex a consequat. Vestibulum blandit tortor leo, at volutpat metus elementum id. Sed ut eros quis erat ullamcorper posuere. Vivamus et egestas enim. Nulla iaculis risus vitae justo iaculis faucibus. Duis nec rhoncus neque, in tempor nisl. Nulla cursus efficitur sodales. Suspendisse potenti. Integer tortor mi, lobortis eget sapien vitae, porta rhoncus risus. Integer finibus at ante eu dapibus. Fusce fringilla nibh in auctor euismod. Curabitur volutpat, mi eu consectetur venenatis, nunc augue cursus magna, nec condimentum est ligula eu felis. Nunc lacinia arcu eu velit molestie tincidunt.</p>
    <ButtonComponent text='Like' action={()=> console.log('LIKE!')} bgColor='green' />
    <ButtonComponent text='Dislike' action={()=> console.log('DISLIKE!')} bgColor='red' />

    <p>Quisque convallis felis eu nulla volutpat, quis maximus lorem vestibulum. Morbi feugiat orci et quam lacinia lobortis. Phasellus sit amet metus sed dui pharetra efficitur. Quisque eu est imperdiet, eleifend turpis sit amet, condimentum urna. Fusce rhoncus vitae lacus et pulvinar. Donec eu porttitor nisl. Aliquam purus enim, laoreet sit amet vulputate ac, dapibus a elit. Aenean lobortis eros eget tellus ultrices, eget tempor dolor laoreet. Suspendisse blandit convallis laoreet. Maecenas pharetra scelerisque nibh, non faucibus ex pretium ut. Nullam aliquam quis erat eu tristique. Vestibulum tempus, enim sed blandit mattis, ligula leo pharetra ipsum, quis maximus ligula ipsum convallis augue. Vivamus in facilisis mi. Nulla vitae quam bibendum magna pharetra tempor et non turpis. Donec eu volutpat lectus.</p>
    <ButtonComponent text='Like' action={()=> console.log('LIKE!')} bgColor='green' />
    <ButtonComponent text='Dislike' action={()=> console.log('DISLIKE!')} bgColor='red' />

    <p>Curabitur accumsan facilisis dolor in rutrum. Aenean tempor fringilla sodales. Donec leo augue, porttitor ac ex id, molestie pharetra felis. Vivamus non neque ut est venenatis maximus at sit amet sapien. Praesent sed neque lacinia, malesuada mauris nec, sollicitudin massa. Duis at tempor ipsum. Donec laoreet dolor vitae eleifend euismod. Quisque finibus, risus sit amet bibendum feugiat, orci purus mollis nibh, et semper dolor massa et velit. Fusce lorem eros, molestie eu efficitur in, tristique sit amet quam. Sed metus risus, consequat et mauris semper, ultrices facilisis purus. Curabitur sed pretium turpis, eget sollicitudin mi. Etiam sollicitudin ac arcu ac convallis. Praesent lectus augue, venenatis at elementum at, ullamcorper ut diam. Sed sit amet fermentum purus, at lobortis dolor. Aliquam sem metus, venenatis nec iaculis vitae, facilisis ut mi.</p>
    <ButtonComponent text='Like' action={()=> console.log('LIKE!')} bgColor='green' />
    <ButtonComponent text='Dislike' action={()=> console.log('DISLIKE!')} bgColor='red' />
    <br />
    <ButtonComponent text='Comment' action={()=> console.log('COMMENT!')} bgColor='white' />
  </ContentContainer>
)

export default Content;