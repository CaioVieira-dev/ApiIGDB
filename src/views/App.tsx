import { useState } from 'react';
import './App.scss';

type CardInfo = {
  title: string,
  thumb: string
}

const Card = (props: CardInfo) => {
  return (
    <div className="card">
      <img className="thumb" src={props.thumb} alt="" />
      <div className="overlay">
        <p className="gameTitle">{props.title}</p>
      </div>
    </div>
  )
}

const Carrousel = () => {
  // const [index, setIndex] = useState(0);

  const game = {
    title: "Totally Acurrate Battle Simulator",
    thumb: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1veb.jpg"
  }

  return (
    <div className="carrousel">
      <div className="card">
        <div className="left Control">
          <img src="/images/arrowLeft.svg" alt="" />
        </div>
        <img className="thumb" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1veb.jpg" alt="" />
        <div className="overlay">
          <p className="gameTitle">Totally Acurrate Battle Simulator</p>
        </div>
      </div>
      <Card title={game.title} thumb={game.thumb} />
      <Card title={game.title} thumb={game.thumb} />
      <Card title={game.title} thumb={game.thumb} />
      <Card title={game.title} thumb={game.thumb} />
      <div className="card">
        <div className="right Control">
          <img src="/images/arrowRight.svg" alt="" />

        </div>
        <img className="thumb" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1veb.jpg" alt="" />
        <div className="overlay">
          <p className="gameTitle">Totally Acurrate Battle Simulator</p>
        </div>
      </div>
    </div>
  )
}


function App() {


  return (
    <div className="App">
      <header>
        <h1>IGDB API</h1>
        <nav>
          <ul>
            <li>Favoritos</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="genres">
          <input type="text" placeholder="Buscar por gênero" />
          <ul>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
            <li>Luta</li>
          </ul>
        </section>
        <section className="highlight">
          <img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc91l5.jpg" alt="" />
          <div className="desc">
            <h2>detalhes</h2>
            <p>descrição simples</p>
            <p>desenvolvedor</p>
          </div>
        </section>
        <section className="popularGames">
          <h2>Jogos populares:</h2>
          <Carrousel />

        </section>
      </main>

    </div>
  );
}

export default App;
