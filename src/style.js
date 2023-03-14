import styled from "styled-components";


const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(22, 23, 34);
`;
const Titulo = styled.h1`
  width: 40vw;
  height: 22vh;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Segoe UI';
  
`;

const ButtonBox = styled.div`
  width: 7vw;
  height: 5vh;
  display: flex;
  align-items: center;
  
  button {
    width: 7vw;
    height: 5vh;
    border-radius: 5px 10px 10px 5px;
    background-color: #2980ff;
    font-size: 18px;
    font-family: 'Segoe UI';
    cursor: pointer; 
    color: rgb(190, 193, 196);
    font-weight: bold;
    border: 1px solid #2980ff; 
    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`;

const Header = styled.div`
width: 100%;
height: 22vh;
display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(1, 1, 1);
`;

const Inputi = styled.div`
width: 33vw;
height: 6vh;
display: flex;
  align-items: center;
  border-radius: 5px 10px 10px 5px;
  background-color: #2980ff;
  position: relative;
  bottom: 3vh;
input {
  width: 25vw;
  height: 5vh;
  font-size: 1em;
  border-radius: 10px 2px 2px 10px;
  border: 3px solid #2980ff;
}
`;

const Lista = styled.div`

width: 30vw;
height: 82vh;
background-color: rgb(22, 23, 34);
color: white;
display: flex;
flex-direction: column;

ul{
  display: flex;
  flex-direction: column; 
  gap:10px;
  width: 28vw;
  height: 65vh;
} 

 li{
  height: 5vh;
  width: 25vw;
  text-decoration: none;
  padding-left: 1vw;
  display: flex;
  justify-content: space-between;
  background-color: rgb(1, 1, 1);
  border-radius: 10px;
  font-size: 18px;
  font-family: 'Segoe UI';
  font-weight: bold;
  border: 1px solid #2980ff;
  align-items: center;
}
button{
  height: 5vh;
  width: 5vw;
  border-radius: 10px;
  color: rgb(62, 62, 63)
  font-weight: bold;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #2980ff;
  }
}
`;

const P = styled.div`
width: 16vw;
color: white;
font-family: 'Segoe UI';
font-weight: bold;
a{
  text-decoration: none;
  font-family: 'Segoe UI';
  font-weight: bold;
  color: #2980ff;
}
`;

export { Container, Titulo, ButtonBox, Header, Inputi, Lista, P, };