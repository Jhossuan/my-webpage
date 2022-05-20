import React from 'react'
import { Container } from './Global.style'
import CriptoImg from '../assets/CriptoLinkedin (2).PNG'
import WeatherApp from '../assets/Weatherapp.PNG'
import MoviesApp from '../assets/MoviesApp.PNG'
import Menu from '../assets/MenuSS.PNG'
import Snaplanding from '../assets/snap-landing.PNG'
import Crud from '../assets/Crud.PNG'
import styled from 'styled-components'
import {DiGithubFull} from 'react-icons/di'
import {MdRemoveRedEye} from 'react-icons/md'

const data = [
  {
    id: 1,
    image: CriptoImg,
    title: "Crypto Price List",
    github: "https://github.com/Jhossuan/CryptoCurrency",
    demo: "https://criptojhossua.netlify.app/",
  },
  {
    id: 2,
    image: WeatherApp,
    title: "Basic WeatherApp",
    github: "https://github.com/Jhossuan/WeatherApp_Responsive",
    demo: "https://weatherres.netlify.app/",
  },
  {
    id: 3,
    image: MoviesApp,
    title: "Movie title finder",
    github: "https://github.com/Jhossuan/MoviesApp",
    demo: "https://moviesappjhossua.netlify.app/",
  },
  {
    id: 4,
    image: Menu,
    title: "Food menu",
    github: "https://github.com/Jhossuan/Menu/tree/main/05-menu/setup",
    demo: "https://menujhossua.netlify.app/",
  },
  {
    id: 5,
    image: Crud,
    title: "Plain CRUD",
    github: "https://github.com/Jhossuan/CRUD_React_Practice",
    demo: "https://crudjhossua.netlify.app/",
  },
  {
    id: 6,
    image: Snaplanding,
    title: "Landing Page",
    github: "https://github.com/Jhossuan/Snap_Landing_Page",
    demo: "https://snaplanding.netlify.app/",
  },
];

const Projects = () => {
  return (
    <Container>
      <Cabecera data-aos='fade-down'>
        <small>Mis proyectos</small>
        <h2>Portafolio</h2>
        <p>Proyectos que demuestran mi educación autodidacta. Esta sección crecera y mejorara según mi avance y crecimiento profesional.</p>
        <hr className='linea2'/>
      </Cabecera>
      <Cards>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <Card key={id} data-aos="fade-up">
                <img className="imagen" src={image} alt={title} />
                <p>{title}</p>
                <div className="buttons">
                  <a target="_blank" href={github} without rel="noreferrer">
                    <DiGithubFull />
                  </a>
                  <a className="live_view" target="_blank" href={demo} without rel="noreferrer">
                    <MdRemoveRedEye />
                  </a>
                </div>
              </Card>
            );
          })
        }
      </Cards>
    </Container>
  );
}

export default Projects

export const Cabecera = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #2dfff5;
  }
  small,
  p {
    color: #fff9;
  }
  p {
    margin: 10px 0 20px 0;
  }
  @media screen and (min-width: 836px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
    small {
      font-size: 18px;
      margin: 0 0 10px 0;
    }
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:2.5rem;
  align-items:center;
  margin:20px 0 20px 0;
    p{
      font-size:25px;
    }

@media screen and (max-width:1250px){
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
}

@media screen and (max-width:734px){
        grid-template-columns: 1fr;
        gap: 1rem;
}
  `
const Card = styled.article`
  background: rgba( 215, 98, 217, 0.45 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5.5px );
  -webkit-backdrop-filter: blur( 5.5px );
  border-radius: 10px;
  width:20rem;
  padding:20px;
  margin:10px 0 10px 0;
  display:flex;
  align-items:center;
  flex-direction:column;
  margin:auto;
  &:hover{
    transition:all 0.2s ease;
    background: transparent;
    border:1px solid rgba( 215, 98, 217, 0.45 );
     }
  .imagen{
    width:18rem;
    border-radius:5px;
    margin-bottom:10px;
  }
  .buttons{
    display:flex;
    align-items:center;
    a{
  transition: all 0.2s;
      font-size:45px;
      text-decoration:none;
      color:white;
      margin:5px 10px;
      &:hover{
        color:#fff9;
      }
    }
    .live_view{
      font-size:30px;
    }
 }
  `