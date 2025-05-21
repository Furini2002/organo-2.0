import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Colérico",
      cor: "#E57B6B",
    },
    {
      id: uuidv4(),
      nome: "Melancólico",
      cor: "#5A7C9C",
    },
    {
      id: uuidv4(),
      nome: "Fleumático",
      cor: "#4CA2A1",
    },
    {
      id: uuidv4(),
      nome: "Sanguíneo",
      cor: "#E9BA64",
    },   
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "SÃO PAULO APOSTOLO",
      frase: "Examinai tudo: abraçai o que é bom",
      imagem:
        "/imagens/colericos/saoPaulo.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SANTA CATARINA DE SENA",
      frase: "A providência divina jamais falta ao homem em nada, sob a condição de que ele a aceite.",
      imagem:
        "/imagens/colericos/santaCatarina.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SÃO FRANCISCO XAVIER",
      frase: "Não há cruz comparável à vida à mercê das suas próprias paixões, e não há felicidade que possa ser comparada à de morrer cada dia por sua própria vontade para se entregar inteiramente a Jesus Cristo",
      imagem:
        "/imagens/colericos/saoFrancisco.jpg",
      time: times[0].nome,
    },    
    {
      id: uuidv4(),
      favorito: false,
      nome: "SÃO JOÃO DA CRUZ",
      frase: "Não faça coisa nenhuma nem diga palavra que Cristo não faria ou não diria se encontrasse as mesmas circunstâncias.",
      imagem:
        "/imagens/melancolicos/saoJoao.jpg",
      time: times[1].nome,
    },    
    {
      id: uuidv4(),
      favorito: false,
      nome: "SÃO PADRE PIO",
      frase: "Ore, espere e não se preocupe. A preocupação é inútil. Nosso Senhor misericordioso escutará a sua oração.",
      imagem:
        "/imagens/melancolicos/saoPio.jpg",
      time: times[1].nome,
    },   
    {
      id: uuidv4(),
      favorito: false,
      nome: "SANTA TERESA DE ÁVILA",
      frase: "O verdadeiro humilde sempre duvida das próprias virtudes e considera mais seguras as que vê no próximo.",
      imagem:
        "/imagens/melancolicos/santaTeresa.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BEATO PIER GIORGIO FRASSATI",
      frase: "A vida é uma luta, e não uma brincadeira",
      imagem:
        "/imagens/fleumaticos/Pier.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SAO BENTO",
      frase: "Ora e trabalha",
      imagem:
        "/imagens/fleumaticos/saoBento.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SÃO JOSÉ",
      frase: "“Seja qual for o vosso trabalho, fazei-o de boa vontade, como para o Senhor, e não para os homens, cientes de que recebeis do senhor a herança como recompensa. O Senhor é Cristo” (Col 3, 23-24)",
      imagem:
        "/imagens/fleumaticos/saoJose.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BEATO CARLO ACUTIS",
      frase: "A única coisa que devemos pedir a Deus em oração é o desejo de ser santos",
      imagem:
        "/imagens/sanguineos/carlo.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SÃO FELIPE NERI",
      frase: "Na guerra pela pureza só vencem os covardes, isto é, aqueles que fogem!",
      imagem:
        "/imagens/sanguineos/saoFelipe.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SANTA TEREZINHA",
      frase: "Não prefiro nem morrer, nem viver… O que o Bom Deus prefere e escolhe para mim, eis o que me agrada mais.",
      imagem:
        "/imagens/sanguineos/santaTerezinha.jpg",
      time: times[3].nome,
    },    
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador      
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])

  }
  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      <section className="times">
        <h1>4 Caminhos, Uma Só Santidade</h1>
        {times.map((time, indice) => (
          <Time
            aoFavoritar = {resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
