
import { ThumbDown, ThumbUp } from '@mui/icons-material';
import React,{useState} from 'react'
import styled from 'styled-components'
// import {Heart} from "@mui/icons-material";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border:1px solid black
  
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  
`;
const P = styled.p`
  color: blue;

 
`;
const Span = styled.span`
  color: red;
  cursor:pointer
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const CategoryItem = ({item}) => {



  const [like, setCount] = useState(0);
   const [dislike, setDisCount] = useState(0);

   const incrementCount = () => {
    
     setCount(like + 1);
   };

    const decrementCount = () => {
           setDisCount(dislike + 1);
    };
  return (
    <Container>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
        <Line>
          <P>
            <ThumbUp onClick={incrementCount}></ThumbUp>
          </P>
          Likes : {like} Dislike : {dislike}
          <Span>
            <ThumbDown onClick={decrementCount}></ThumbDown>
            
          </Span>
        </Line>
      </Container>
    </Container>
  );
}

export default CategoryItem