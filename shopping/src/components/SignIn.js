import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  padding: 16px;
}
`;

const Form = styled.form`
  border: 3px solid #f1f1f1;
  width: 300px;
  border-radius: 20px;
  -webkit-box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.75);
`;

const ImgContainer = styled.div`
  text-align: center;
  margin: 24px 0 12px 0;
`;
const Image = styled.img`
  width: 40%;
  border-radius: 50%;
`;

const Label=styled.label`
font-size:20;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const Para = styled.p`
  font-size:10; 
`;

const A=styled.a`
text-decoration:none;
`;

const SignIn = () => {
  return (
    <Container>
      <Form>
        <ImgContainer>
          <Image src="/assets/login3.png"></Image>
        </ImgContainer>
        <Container>
          <Label>Username</Label>
          <Input type="text" placeholder="Enter Email"></Input>
          <Label>Password</Label>
          <Input type="Password" placeholder="Enter password"></Input>
          <Button>Login</Button>
          <Para>
            Go to <A href='#'>Register</A>
          </Para>
        </Container>
      </Form>
    </Container>
  );
}

export default SignIn