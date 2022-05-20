import React from 'react'
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import styled from 'styled-components';

const linkedIn = "https://www.linkedin.com/in/jhossua-campos-d%C3%ADaz-94561a219/";
const gitHub = 'https://github.com/Jhossuan'
const instagram = 'https://www.instagram.com/jhossuaxd/?hl=es'
const tiktok = 'https://vm.tiktok.com/ZTdCCJmhs/'

const Footer = () => {
  return (
    <div className="footer">
      <small
        style={{ display: "flex", justifyContent: "center", color: "#fff3" }}
      >
        © JHOSSUAN Developer. All rights reserved.
      </small>
      <small
        style={{ display: "flex", justifyContent: "center", color: "#fff3" }}
      >
        Ultima actualizacion : 20/05/2022 
      </small>
      <Redes>
        <a href={gitHub} target="_blank" without rel="noreferrer">
          <BsGithub className="icons" />
        </a>
        <a href={linkedIn} target="_blank" without rel="noreferrer">
          <BsLinkedin className="icons" />
        </a>
        <a href={instagram} target="_blank" without rel="noreferrer">
          <BsInstagram className="icons" />
        </a>
        <a href={tiktok} target="_blank" without rel="noreferrer">
          <FaTiktok className="icons" />
        </a>
      </Redes>
    </div>
  );
}

export default Footer
 
const Redes = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
    a{
      color:#fff5;
      margin:10px;
    }
`