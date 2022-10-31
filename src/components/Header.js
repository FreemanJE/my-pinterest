import React, { useState } from 'react';
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header(props) {

    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log("this is the input", input)
        props.onSubmit(input);
        setInput("");
    };

    return (
        <Container> 
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Homepage</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit}>

                        </button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <TextsmsIcon />
                </IconButton>
                <IconButton>
                    <FaceIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
        </Container>

    )
}

export default Header;

const Container = styled.div`
display: flex;
justify-content: center;
`
const HomeButton = styled.div`
display: flex;
height: 48px;
min-width: 123px;
align-items: center;
justify-content: center;
border-radius: 24px;
cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
  
`;
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
  :hover {
    background-color: #e2e1e2;
    border-radius: 20px;
  }
`;
const HomePageButton = styled(HomeButton)`
background-color: rgb(24, 119, 156);

    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`;
const FollowingButton = styled(HomeButton)`
   background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e2e1e2;
  }
`;

const SearchWrapper = styled.div`
  flex: 2;
`
const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;        
    }
    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }
    form > button {
        display: none;
      }
    
      input:focus {
        outline: none;
      }
    
      input:active {
        outline: none;
      }
    
      input:hover {
        outline: none;
      }
`;
const IconsWrapper = styled.div``;

