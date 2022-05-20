import styledComponents from "styled-components";
// import { createGlobalStyle } from "styled-components";

export const Container = styledComponents.div`
    margin:5vh 5vw 5vh 5vw;
    @media screen and (min-width: 836px){
        margin: 8vh 10vw 0 10vw;
        padding:${(props)=>props.padding};
        // border:1px solid red;
    }
`