import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import React  from 'react';


const Container = styled.div`
  height: 60px;
  
`;

const Wrapper = styled.div`
  // padding: 10px 20px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
 
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration:none;
`;



const Navbar = () => {
 
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOPPING</Logo>
        </Center>
        <Right>
          <MenuItem>
            {/* <Link to="Register">Register</Link> */}
            <button className="btn btn-success" >
              <Link to="Register" className="text-white ">
                Register
              </Link>
            </button>
            {/* <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <button onClick={setModalIsOpenToFalse}>x</button>
              <SignIn />
            </Modal> */}
          </MenuItem>

          <MenuItem>
            {/* <Link to="SignIn">SignIn</Link> */}
            {/* <a>Sign In</a> */}

            <button className="btn btn-success" >
              <Link to="SignIn" className="text-white">
                Sign In
              </Link>
            </button>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar 