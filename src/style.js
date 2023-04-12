import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(22, 23, 34);
  @media (max-width: 630px) {
    height: 102vh;
    
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

const Titulo = styled.h1`
  width: 40vw;
  height: 22vh;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Segoe UI';
  @media (max-width: 630px) {
    width: 75vw;
    
    }
`;

const ButtonBox = styled.div`
  width: 7vw;
  height: 5vh;
  display: flex;
  align-items: center;
  @media (max-width: 930px) {
      width: 9vw;
      
    }
  @media (max-width: 800px) {
      width: 14vw;
      
    }
  @media (max-width: 630px) {
      width: 15vw;
      
    }
  button {
    width: 7vw;
    height: 5vh;
    border-radius: 5px 10px 10px 5px;
    background-color: #2980ff;
    font-size: 1vw;
    font-family: 'Segoe UI';
    cursor: pointer; 
    color: rgb(190, 193, 196);
    font-weight: bold;
    border: 1px solid #2980ff; 
    &:hover {
      cursor: pointer;
      color: white;
    }
    @media (max-width: 930px) {
      width: 8vw;
      font-size: 1.5vw;
    }
    @media (max-width: 800px) {
      width: 9vw;
      font-size: 1.9vw;
    }
    @media (max-width: 630px) {
      width: 20vw;
      font-size: 3.6vw;
      
    }
  }
`;

const Inputi = styled.div`
width: 29vw;
height: 6vh;
display: flex;
  align-items: center;
  border-radius: 5px 10px 10px 5px;
  background-color: #2980ff;
  position: relative;
  bottom: 3vh;
  @media (max-width: 930px) {
      width: 33vw;
  } 
  @media (max-width: 800px) {
    width: 50vw;
    }
    @media (max-width: 630px) {
    width: 72vw;
    border: 3px solid #2980ff;
    }
input {
  width: 22vw;
  height: 5vh;
  font-size: 1em;
  border-radius: 10px 2px 2px 10px;
  border: 3px solid #2980ff;
  outline: none;
  @media (max-width: 800px) {
      width: 50vw;
    }
}
`;

const Lista = styled.div`
width: 30vw;
height: 70vh;
color: white;
@media (max-width: 800px) {
    width: 58vw;
    }
    @media (max-width: 630px) {
      width: 70vw;
      height: 68vh;
    }
ul{
  display: flex;
  flex-direction: column; 
  gap:10px;
  width: 28vw;
  height: 55vh;
  @media (max-width: 800px) {
    width: 48vw;
    height: 63vh;
    display: flex;
    align-items: center;
    }
    @media (max-width: 630px) {
    width: 49vw;
    height: 63vh;
    display: flex;
    align-items: center;
    }
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
  font-size: 100%;
  font-family: 'Segoe UI';
  font-weight: bold;
  border: 1px solid #2980ff;
  align-items: center;
  @media (max-width: 800px) {
    width: 34vw;
    }
    @media (max-width: 630px) {
      width: 70vw;
      
    }
}
button{
  height: 5vh;
  width: 5vw;
  border-radius: 10px;
  color: rgb(62, 62, 63);
  font-weight: bold;
  font-size: 1vw;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #2980ff;
  }
  @media (max-width: 800px) {
    width: 8vw;
    font-size: 1.5vw;
    }
    @media (max-width: 630px) {
      width: 15vw;
      font-size: 3vw;
    }
}
`;

const P = styled.div`
width: 37vw;
color: white;
text-align: center;
font-family: 'Segoe UI';
font-weight: bold;
@media (max-width: 800px) {
    width: 50vw;
    font-size: 80%;
    }
    @media (max-width: 630px) {
    width: 68vw;
    font-size: 78%; 
    }
a{
  text-decoration: none;
  font-family: 'Segoe UI';
  font-weight: bold;
  color: #2980ff;
}
`;


export { Container, Titulo, ButtonBox, Header, Inputi, Lista, P, };