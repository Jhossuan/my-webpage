import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Container } from './Global.style'
import Perfil from '../assets/perfil.png'
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const linkedIn = "https://www.linkedin.com/in/jhossua-campos-d%C3%ADaz-94561a219/";
const gitHub = 'https://github.com/Jhossuan'
const instagram = 'https://www.instagram.com/jhossuaxd/?hl=es'
const tiktok = 'https://vm.tiktok.com/ZTdCCJmhs/'


const Home = () => {

  useEffect(() => {
    AOS.init({duration:600});
  },[]);

  return (
    <Container padding='35px'>
      <Cabecera data-aos='zoom-in-down'>
      <Imagen src={Perfil} alt='Foto de perfil'/>
        <p className='descripcion'>
          Hola, soy Jhossuan👋🏽 <br /> <span>Frontend developer</span> autodidacta. <br /> Apasionado por la web, tecnologia y educación.
        </p>
      </Cabecera>
      <Redes data-aos='zoom-in-up'>
        <a href={gitHub} target='_blank' without rel="noreferrer"><BsGithub className='icons'/></a>
        <a href={linkedIn} target='_blank' without rel="noreferrer"><BsLinkedin className='icons'/></a>
        <a href={instagram} target='_blank' without rel="noreferrer"><BsInstagram className='icons'/></a>
        <a href={tiktok} target='_blank' without rel="noreferrer"><FaTiktok className='icons'/></a>
      </Redes>
    </Container>
  )
}

export default Home

const Cabecera = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .descripcion {
    font-size: 30px;
    span {
      color: #2DFFF5;
      font-weight: 600;
    }
  }
`;

const Imagen = styled.img`
  background:#883DF2;
  width:15rem;
  border-radius:50%;
  box-shadow:0 0 5px 5px #0005;
  margin:20px 0 30px 0;
  z-index:998;
  @media screen and (min-width: 836px){
    margin:-20px 0 20px 0;
  }
`

const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .icons {
    transition: all 0.2s ease-in-out;
    margin: 20px 10px;
    cursor: pointer;
    font-size: 30px;
    color: white;
    &:hover {
      color: #2dfff5;
    }
  }
  &::after {
    content: "";
    width: 60px;
    height: 2px;
    background: #fff;
  }
  &::before {
    content: "";
    width: 60px;
    height: 2px;
    background: #fff;
  }
`;