import React from "react";
import styled from "styled-components";

function Headers() {
  return (
    <Nav>
      <Logo src="./images/logo.svg"  alt="Logo "/>
      <NavMenu>
        <a href="#HOME">
          <img src="/images/home-icon.svg"  alt="Logo " />
          <span>HOME</span>
        </a>
        <a  href="#HOME">
          <img src="/images/search-icon.svg"  alt="Logo " />
          <span>SEARCH</span>
        </a>
        <a  href="#HOME">
          <img src="/images/watchlist-icon.svg" alt="Logo" />
          <span>WATCHLIST</span>
        </a>
        <a  href="#HOME">
          <img src="/images/original-icon.svg"  alt="Logo "/>
          <span>ORIGIALS</span>
        </a>
        <a  href="#HOME">
          <img src="/images/movie-icon.svg"  alt="Logo " />
          <span>MOVIES</span>
        </a>
        <a  href="#HOME">
          <img src="/images/series-icon.svg"  alt="Logo " />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src ="images/dp.jpeg"  alt="Logo "/>
    </Nav>
  );
}

export default Headers;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 36px;
  overflow-x:hidden;

  // justify-content:center;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
    display: flex;
    flex:1;
    a{
        display: flex;  
        align-items:center;
        padding: 0 12px; 
        cursor:pointer;
        color:white;
        text-decoration:none;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
        }
    }
    a:hover{
        text-decoration:underline;
    }
`;
const UserImg =  styled.img`
    border-radius:50%;
    width:58px;
    height:58px;
    // margin-left:auto;
    padding:10px;
    cursor:pointer;
`;