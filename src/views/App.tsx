import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header/Header'

import './components/Header/Header.scss';
import './App.scss';

import { Carrousel } from './components/Carrousel/Carrousel'

type CardInfo = {
    title: string,
    thumb: string,
}

const genresRequestInfo = [
    {
        "id": 4,
        "name": "Fighting"
    },
    {
        "id": 5,
        "name": "Shooter"
    },
    {
        "id": 7,
        "name": "Music"
    },
    {
        "id": 8,
        "name": "Platform"
    },
    {
        "id": 9,
        "name": "Puzzle"
    },
    {
        "id": 10,
        "name": "Racing"
    },
    {
        "id": 11,
        "name": "Real Time Strategy (RTS)"
    },
    {
        "id": 12,
        "name": "Role-playing (RPG)"
    },
    {
        "id": 13,
        "name": "Simulator"
    },
    {
        "id": 14,
        "name": "Sport"
    },
    {
        "id": 15,
        "name": "Strategy"
    },
    {
        "id": 16,
        "name": "Turn-based strategy (TBS)"
    },
    {
        "id": 24,
        "name": "Tactical"
    },
    {
        "id": 26,
        "name": "Quiz/Trivia"
    },
    {
        "id": 25,
        "name": "Hack and slash/Beat 'em up"
    },
    {
        "id": 30,
        "name": "Pinball"
    },
    {
        "id": 31,
        "name": "Adventure"
    },
    {
        "id": 33,
        "name": "Arcade"
    },
    {
        "id": 34,
        "name": "Visual Novel"
    },
    {
        "id": 32,
        "name": "Indie"
    },
    {
        "id": 35,
        "name": "Card & Board Game"
    },
    {
        "id": 36,
        "name": "MOBA"
    },
    {
        "id": 2,
        "name": "Point-and-click"
    }
]

const coverRequestInfo = [
    {
        "id": 139338,
        "image_id": "co2zii"
    },
    {
        "id": 97021,
        "image_id": "co22v1"
    },
    {
        "id": 108177,
        "image_id": "co2bgx"
    },
    {
        "id": 150274,
        "image_id": "co37ya"
    }
]

const gameRequestInfo = [
    {
        "id": 54522,
        "cover": 108177,
        "name": "Gangs of Space",
        "summary": "Gangs of Space is a massively-multiplayer Rogue Shmup where Gangs of players compete for the conquest of the galaxy."
    },
    {
        "id": 40104,
        "name": "Dogou Souken",
        "summary": "An overhead-view shoot'em up game."
    },
    {
        "id": 150824,
        "cover": 150274,
        "name": "Dizzy Two",
        "summary": "This is a legendary quest from the 80s, invented by the Oliver Twins, about a yolkfolk living in trees. The main character, Dizzy, constantly rescues relatives who get into trouble. And now he found himself on a strange island after his family was kidnapped by the Hunter..."
    },
    {
        "id": 68841,
        "cover": 97021,
        "name": "Captivus",
        "summary": "Join the movement! Build a deck, equip your ship, and take on others in intense 1v1 card battles!"
    },
    {
        "id": 33284,
        "name": "One way to exit",
        "summary": "Move forward or backward in search of an exit, but remember, if you started moving you can not stop, and in any case, do not touch the walls, otherwise you have to start all over again."
    },
    {
        "id": 104748,
        "name": "Space station - build your own ISS"
    },
    {
        "id": 146815,
        "cover": 139338,
        "name": "Parking Lot Maze",
        "summary": "Parking Lot Maze is a puzzle game where as a parking lot manager, you need to free cars from gridlock before the stress level hits the roof."
    },
    {
        "id": 85450,
        "name": "Transformers Prime: The Game"
    },
    {
        "id": 53297,
        "name": "Lords of Xulima: The Talisman of Golot Edition"
    },
    {
        "id": 89616,
        "name": "Bubble Whirl Shooter"
    }
]
const gamesF: CardInfo[] = [];
for (let i = 0; i < gameRequestInfo.length; i++) {
    if (gameRequestInfo[i].cover) {
        const cover = coverRequestInfo.find(requestInfo => requestInfo.id === gameRequestInfo[i].cover).image_id;
        let game: CardInfo = {
            title: gameRequestInfo[i].name,
            thumb: `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover}.jpg`
        }

        gamesF.push(game)
        continue;
    }
    gamesF.push({
        title: gameRequestInfo[i].name,
        thumb: "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover_qhhlj6.jpg"
    })
}


const Genres = () => {

    return (
        <ul>
            {genresRequestInfo.map((genre, i) => { return <li key={i}>{genre.name}</li> })}
        </ul>
    )
}

function App() {


    return (
        <div className="App">
            <Header />
            <main>
                <section className="genres">
                    <input type="text" placeholder="Buscar por gênero" />
                    <Genres />
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
                    <Carrousel games={gamesF} />

                </section>
            </main>

        </div>
    );
}

export default App;
