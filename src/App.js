import React, { Component } from "react";
import { Container, Titulo, ButtonBox, Header, Inputi, Lista, P, } from "./style";


export default class App extends Component {
  state = {
    listaDeTarefas: [],
    tarefas: ""
  };
  handleChange = (event) => {
    this.setState({
      tarefas: event.target.value
    });
  };
  handleClick = () => {
    if (this.state.tarefas === "") {
      alert("Você não pode criar tarefas vazias.");
    } else {
      this.setState({
        listaDeTarefas: this.state.listaDeTarefas.concat({
          tarefas: this.state.tarefas,
          id: Math.random()
        }),
        tarefas: ""
      });
    }
  };

  delete = (id) => {
    this.setState({
      listaDeTarefas: this.state.listaDeTarefas.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      
        <Container>
          <Header>
          <Titulo>Lista de Tarefas</Titulo>
          </Header>
          <Inputi>
          <input
            placeholder="Adicione sua tarefa"
            value={this.state.tarefas}
            id="inp"
            onChange={this.handleChange}
            type="text"
          />
          <ButtonBox>
            <button onClick={this.handleClick}>Adicionar</button>{""}
          </ButtonBox>
          </Inputi>
          <Lista>
          <ul>
            {this.state.listaDeTarefas.map((item) => (
              <li>
                {item.tarefas}{""}
                <button
                  onClick={() => {
                    this.delete(item.id);
                  }}
                >Excluir</button>
              </li>
            ))}
          </ul>
          </Lista>
          <P>
            Desafio do VnW feito por <a href="https://github.com/vinicius-bispo1" target={"_blank"}>Vinicius Bispo</a>
          </P>
        </Container>
      
    );
  }
}
