import React from 'react'
import styled from 'styled-components'
import { Container } from './Global.style'
import { Cabecera } from './Projects'
import { BsCodeSlash, BsPatchCheckFill } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiMedal } from 'react-icons/bi'
import CV from '../assets/CVJhossuanNew.pdf'
import {HiOutlineDocumentDownload} from 'react-icons/hi'

const data = [
  { id:1, title:'HTML', level: 'Avanzado'},
  { id:2, title:'CSS', level: 'Avanzado'},
  { id:3, title:'SASS', level: 'Intermedio'},
  { id:4, title:'BOOTSTRAP', level: 'Aprendiendo'},
  { id:5, title:'JAVASCRIPT', level: 'Intermedio'},
  { id:6, title:'REACT.JS', level: 'Intermedio'},
  { id:7, title:'NEXT.JS', level: 'Aprendiendo'},
  { id:8, title:'STYLED COMPONENTS', level: 'Intermedio'},
  { id:9, title:'NODEJS - EXPRESS', level: 'Aprendiendo'}
]

const About = () => {

  return (
    <Container>
      <Cabecera data-aos='fade-down'>
        <small>Conoce mas...</small>
        <h2>Sobre mi</h2>
        <p>Experiencia, educación y tecnologias que domino.</p>
        <BtnDownload className="button" href={CV} download>
              <HiOutlineDocumentDownload style={{ fontSize: "20px" }} />
              <span>Download</span>
            </BtnDownload>
      </Cabecera>
        <hr className="linea2" />
      <Content>
        <Targets>
          <BsCodeSlash className="icons" />
          <h2>Experiencia</h2>
          <p>+10 meses...</p>
          <small>
            Estudiando de forma autodidacta y practicando constantemente...
          </small>
        </Targets>
        <Targets>
          <VscFolderLibrary className="icons" />
          <h2>Proyectos</h2>
          <p>+10 Proyectos de practica</p>
          <small>
            Consumiendo APIs, practicando diseños responsives y mucho mas...
          </small>
        </Targets>
        <Targets>
          <BiMedal className="icons" />
          <h2>Habilidades</h2>
          <p>Autodidacta e investigador</p>
          <small>
            Adquiridas en mi etapa de educación y practicas de codificación...
          </small>
        </Targets>
      </Content>
      <Tecnologias>
        {data.map(({ id, title, level }) => {
          return (
            <div className="card" key={id}>
              <div className="interno">
                <BsPatchCheckFill className="icons__cheked" />
                <p>{title}</p>
              </div>
              <small>{level}</small>
            </div>
          );
        })}
      </Tecnologias>
      <hr className="linea" />
    </Container>
  );
}

export default About


const Content = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:2.5rem;
  flex-direction:column;
  margin:20px 0;

  @media screen and (max-width:1250px){
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width:734px){
          grid-template-columns: 1fr;
          gap: 1rem;
  }
`

const Targets = styled.div`
  display:flex;
  flex-direction:column;
  background: linear-gradient(#883DF2, transparent);
  border-radius:10px;
  padding:25px 20px 60px 20px;
  text-align:center;
  cursor:default;
  transition:all 0.2s;
  animation: fadeIn 1.5s;
  &:hover{
    box-shadow: 4px 4px #883DF2, 6px 6px #B150F2, 8px 8px #D762D9;
    transform: translateX(-3px);
  }
    .icons{
      font-size:25px;
      color:#2dfff5;
      font-weight:700;
    }
    h2{
      color:#2dfff5;
    }
    small{
      margin-top:10px;
      color:#fff8
    }
    p{
      color:#fff
    }
`

const Tecnologias = styled.div`
    display:flex;
    flex-direction:column;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:2rem;
    .card{
      animation: fadeUp 3s;
      background: linear-gradient(#883DF2, transparent);
      border-radius:5px;
      padding:10px;
      transition:all 0.2s;
      cursor:default;
      &:hover{
        box-shadow: 4px 4px #883DF2, 6px 6px #B150F2, 8px 8px #D762D9;
        transform: translateX(-3px);
      }
      small{
        color:#fff8;
      }
      .icons__cheked{
        color:#2dfff5;
      }
      .interno{
        display:flex;
        align-items:center;
        p{
          margin:0 0 0 5px;
        }
      }
    }
    @media screen and (max-width:1250px){
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }
  
    @media screen and (max-width:734px){
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
    }
`

const BtnDownload = styled.a`
  @media screen and (min-width: 836px){
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
  margin-bottom:10px;
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
  }`