import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <p> Bem vindo </p>
        <section className="sessao">
          <p>
            {" "}
            Olá! Sou o Estevão e este é o meu portifólio. Está bem básico mesmo,
            mas vamos melhorando com o tempo! Sou{" "}
            <a
              href="https://pt.wikipedia.org/wiki/Brasil"
              target="_blank"
              rel="noreferrer"
            >
              <span className="Links">brasileiro</span>
            </a>
            , tenho 31 anos e moro em Igarapé/MG(Mais conhecido como{" "}
            <a
              href="https://www.cidade-brasil.com.br/municipio-igarape.html"
              target="_blank"
              rel="noreferrer"
            >
              <span className="Links">Igaratexas</span>
            </a>{" "}
            ).
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
