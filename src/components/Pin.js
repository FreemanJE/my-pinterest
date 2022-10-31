import React from 'react'
import styled from 'styled-components'


function Pin(props) {

  let { urls, alt_description } = props;

  return (
    <Wrapper>
      <Container>
        <div className='cards'>
          <img src={urls?.regular} alt="pin " />
          <p className='descripton' >{alt_description} </p>
        </div>

      </Container>
    </Wrapper>


  )
}

export default Pin

const Wrapper = styled.div`
  display: inline-flex;
  width: 300px;
`;
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
cursor: pointer;
width: 236px;
padding: 2px;

.descripton {
  display: none
}

.cards {
  width: 100%;
  position: relative;
}
img {    
    width: 100%;
    cursor: zoom-in;
    border: 2px solid white;
    border-radius: 16px;
    object-fit: cover;
    transition: transform .5s linear;


    &:hover {      
        border: 5px solid white;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }}

   .cards:hover .descripton {
    display: flex;
    position: absolute;
    top: 30px;
    left: 5%;
    width: 80%;   
    text-align: center;
    background-color: white;
    border-radius: 10px;
    padding: 5px
   }
`
