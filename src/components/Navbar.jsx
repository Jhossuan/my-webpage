import React, { useState } from 'react'
import { NavLink as Link, NavLink as LinkLogo } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars, FaLaptopCode } from 'react-icons/fa'
import {HiOutlineDocumentDownload} from 'react-icons/hi'
import CV from '../assets/CVJhossuanNew.pdf'

const NavBar = () => {

  const [active, setActive] = useState(true)

  const toggleBtn = () =>{
    setActive(!active)
  }

  return (
    <>
      <Navegacion>
        <BurgerBtn onClick={toggleBtn} className={active ? "" : "activeBtn"} />
        <LinkBtn className="LogoBtn" to="/" onClick={() => setActive(true)}>
          <Logo>
            <span>Jhossuan</span>
            <FaLaptopCode className="laptop" />
          </Logo>
        </LinkBtn>
        <Panel className={active ? "" : "active"}>
          <Menu>
            <NavLink onClick={() => setActive(true)} to="/projects">
              Proyectos
            </NavLink>
            <NavLink onClick={() => setActive(true)} to="/about">
              Sobre mi
            </NavLink>
            <NavLink
              onClick={() => setActive(true)}
              to="/contact"
              className="button"
            >
              <span>Contactame</span>
            </NavLink>
            <BtnDownload className="button" href={CV} download>
              <HiOutlineDocumentDownload style={{ fontSize: "20px" }} />
              <span>Download</span>
            </BtnDownload>
          </Menu>
        </Panel>
      </Navegacion>
    </>
  );
}

export default NavBar


const Navegacion = styled.nav`
  background: transparent;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 836px) {
    justify-content: space-around;
  }
`;

const Panel = styled.nav`
  background: transparent;
  color:#F2F2F2;
  position: fixed;
  backdrop-filter: blur( 2px );
  top: 4rem;
  left: 0;
  right:0;
  bottom:0;
  transition: transform 0.3s ease;
  transform: translate(0, -200%);
  z-index:999;
    &.active{
      transform: translate(0, 0);
    };
    @media screen and (min-width: 836px){
      transform: translate(0, 0);
      background:none;
      position:relative;
      top:0;
    }
`
const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 836px){
    flex-direction:row;
    width:20rem;
    align-items:normal;
    width:inherit
  }
`

const NavLink = styled(Link)`
  padding: 1.5rem;
  font-size: 1.4rem;
  text-decoration: none;
  transition: 0.2s;
  color: white;
  text-transform:uppercase;
  &.active{
    background:#B150F2;
    color:#fff;
    font-weight:700;
  }
  @media screen and (min-width: 836px){
    padding:1rem;
    &.active{
      background:transparent;
      color:#2DFFF5;
      text-shadow: 1px 1px #883DF2, 2px 2px #883DF2, 3px 3px #B150F2;
      transform: translateX(-3px);
    }
  }
`

const BtnDownload = styled.a`
  @media screen and (max-width: 836px){
    display:none;
  }
  display: flex;
  justify-content:center;
  text-decoration:none;
  border-radius: 7px;
  border: none;
  background: #1875FF;
  color: white;
  font-family: inherit;
  text-align: center;
  font-size: 14px;
  text-transform:uppercase;
  box-shadow: 0px 14px 56px -11px #1875FF;
  width: 12em;
  padding: 1em;
  transition: all 0.4s;
  cursor: pointer;
  vertical-align: middle;
  margin-top:12px;
  align-items:center;
  height:32px;

  span {
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content:center;
  position: relative;
  transition: 0.4s;
    &:after {
    content:'MY CV';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.7s;
    }
  }

  &:hover span {
  padding-right: 3.55em;
  }

  &:hover span:after {
  opacity: 4;
  right: 0;
`;

const Logo = styled.div`
  display:flex;
  align-items:center;
  margin-right:20px;
    span{
      font-size:25px;
      font-weight:700;
      letter-spacing:2px;
      color:#2DFFF5;
      text-transform:uppercase;
    }
    .laptop{
      font-size:25px;
      margin-right:10px;
      color:#2DFFF5;
    }
    @media screen and (min-width: 836px){
      margin-right:0;
    }
`

const LinkBtn = styled(LinkLogo)`
    text-decoration:none;
    transition: all 0.2s ease-in-out;
    &:hover{
        text-shadow: 1px 1px #883DF2, 2px 2px #883DF2, 3px 3px #B150F2;
        transform: translateX(-3px);
    }
    &.active{
      text-shadow: 1px 1px #883DF2, 2px 2px #883DF2, 3px 3px #B150F2;
      transform: translateX(-3px);
    }
`

const BurgerBtn = styled(FaBars)`
  display: flex;
  z-index: 999;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  font-size: 30px;
  left: 10px;
  color: #2dfff5;
  &.activeBtn {
    transform: rotate(90deg);
  }
  @media screen and (min-width: 836px) {
    display: none;
  }
`;