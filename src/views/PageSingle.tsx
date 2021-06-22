import { useState, useRef, useEffect } from 'react';


import Header from './components/Header/Header'

import './components/Header/Header.scss';
import './PageSingle.scss';

import { Carrousel } from './components/Carrousel/Carrousel'


type CardInfo = {
    title: string,
    thumb: string,

}

const similarRequestInfo = [
    {
        "id": 78550,
        "cover": 82233,
        "name": "Bad North"
    },
    {
        "id": 18623,
        "cover": 67709,
        "name": "Villagers"
    },
    {
        "id": 55888,
        "cover": 75943,
        "name": "Computer Tycoon"
    },
    {
        "id": 51577,
        "cover": 82238,
        "name": "Rise of Industry"
    },
    {
        "id": 109339,
        "cover": 68319,
        "name": "CHANGE: A Homeless Survival Experience"
    },
    {
        "id": 31515,
        "cover": 75999,
        "name": "Another Brick in the Mall"
    },
    {
        "id": 36553,
        "cover": 82667,
        "name": "Medieval Kingdom Wars"
    },
    {
        "id": 102163,
        "cover": 81477,
        "name": "Dawn of Man"
    },
    {
        "id": 55590,
        "cover": 81868,
        "name": "Mashinky"
    },
    {
        "id": 65827,
        "cover": 97215,
        "name": "Bronze Age"
    }
]

const similarCoverRequestInfo = [
    {
        "id": 81868,
        "image_id": "co1r64"
    },
    {
        "id": 82238,
        "image_id": "co1rge"
    },
    {
        "id": 82233,
        "image_id": "co1rg9"
    },
    {
        "id": 68319,
        "image_id": "bo0qs5whlvjqc6bhpfru"
    },
    {
        "id": 82667,
        "image_id": "co1rsb"
    },
    {
        "id": 75943,
        "image_id": "co1mlj"
    },
    {
        "id": 75999,
        "image_id": "co1mn3"
    },
    {
        "id": 67709,
        "image_id": "ng8iyawuctwzqz32jo5p"
    },
    {
        "id": 81477,
        "image_id": "co1qv9"
    },
    {
        "id": 97215,
        "image_id": "co230f"
    }
]

const publishedGamesRequestData = [
    {
        "id": 52799,
        "cover": 31642,
        "name": "Clustertruck Collector's Edition"
    },
    {
        "id": 18622,
        "cover": 14937,
        "name": "SUPER TRUCK"
    },
    {
        "id": 34644,
        "cover": 123718,
        "name": "Square Brawl"
    },
    {
        "id": 65832,
        "cover": 86001,
        "name": "Stick Fight: The Game"
    },
    {
        "id": 71583,
        "cover": 97801,
        "name": "Totally Accurate Battle Zombielator"
    },
    {
        "id": 103222,
        "cover": 76320,
        "name": "Totally Accurate Battlegrounds"
    },
    {
        "id": 35081,
        "cover": 86099,
        "name": "Air Brawl"
    },
    {
        "id": 18484,
        "cover": 44761,
        "name": "Clustertruck"
    },
    {
        "id": 21642,
        "cover": 87347,
        "name": "Totally Accurate Battle Simulator"
    }
]

let publishedGamesList = "";
for (let i = 0; i < publishedGamesRequestData.length; i++) {
    publishedGamesList += ` ${publishedGamesRequestData[i].name}; `
}

const publisherData = {
    "id": 9453,
    "change_date_category": 7,
    "country": 752,
    "created_at": 1458950400,
    "description": "We are a game studio that focuses on gameplay above all else.",
    "developed": [
        18484,
        18622,
        21642,
        34644,
        35081,
        52799,
        65832,
        71583,
        103222
    ],
    "logo": 927,
    "name": "Landfall Games",
    "published": [
        21642,
        34644,
        35081,
        65832,
        71583,
        103222
    ],
    "slug": "landfall-games",
    "start_date_category": 7,
    "updated_at": 1587168000,
    "url": "https://www.igdb.com/companies/landfall-games",
    "websites": [
        412
    ],
    "checksum": "3bd45bb8-ea9d-f55d-fd91-4d287d212496"
}

const gameData =
{
    "id": 21642,
    "age_ratings": [
        11346,
        11347
    ],
    "artworks": [
        8429
    ],
    "category": 0,
    "collection": 5823,
    "cover": 87347,
    "created_at": 1469704752,
    "external_games": [
        3770,
        186513,
        248210
    ],
    "first_release_date": 1617235200,
    "follows": 412,
    "game_engines": [
        13
    ],
    "game_modes": [
        1
    ],
    "genres": [
        13,
        15,
        32
    ],
    "hypes": 282,
    "involved_companies": [
        37993
    ],
    "keywords": [
        701,
        864,
        2560,
        2561
    ],
    "name": "Totally Accurate Battle Simulator",
    "platforms": [
        6,
        14,
        49
    ],
    "player_perspectives": [
        2,
        3
    ],
    "rating": 63.3001941079464,
    "rating_count": 36,
    "release_dates": [
        237504,
        237505,
        237506
    ],
    "screenshots": [
        34542,
        34543,
        34544,
        34545,
        38684
    ],
    "similar_games": [
        18623,
        31515,
        36553,
        51577,
        55590,
        55888,
        65827,
        78550,
        102163,
        109339
    ],
    "slug": "totally-accurate-battle-simulator",
    "summary": "A physics based medieval battle simulator which lets you pit wacky waving armies against each other. In Totally Accurate Battle Simulator you pit waving arm men against each other and watch them fight it out.",
    "tags": [
        27,
        39,
        268435469,
        268435471,
        268435488,
        536871613,
        536871776,
        536873472,
        536873473
    ],
    "themes": [
        27,
        39
    ],
    "total_rating": 63.3001941079464,
    "total_rating_count": 36,
    "updated_at": 1622123941,
    "url": "https://www.igdb.com/games/totally-accurate-battle-simulator",
    "videos": [
        47632
    ],
    "websites": [
        17469,
        65903,
        118359,
        118360,
        118365,
        118366,
        128272
    ],
    "checksum": "f2cc9e0d-1384-d461-c267-e436f5a963a7"
}

const gamesF: CardInfo[] = [];
for (let i = 0; i < similarRequestInfo.length; i++) {
    if (similarRequestInfo[i].cover) {
        const cover = similarCoverRequestInfo.find(requestInfo => requestInfo.id === similarRequestInfo[i].cover).image_id;
        let game: CardInfo = {
            title: similarRequestInfo[i].name,
            thumb: `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover}.jpg`
        }

        gamesF.push(game)
        continue;
    }
    gamesF.push({
        title: similarRequestInfo[i].name,
        thumb: "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover_qhhlj6.jpg"
    })
}

const Publisher = () => {
    const createdAt = new Date(publisherData.created_at * 1000).toLocaleDateString('pt-BR')
    return (
        <section className="publisher">

            <div className="infoWrapper">
                <h2>Publisher: <span>{publisherData.name}</span> </h2>
                <p>{publisherData.description}</p>
                <p>Foi criada em {createdAt}</p>
                <h3>Developed Games:</h3>
                <p>{publishedGamesList}</p>

            </div>

            <img src="https://images.igdb.com/igdb/image/upload/t_720p/fvydo84m6pvoku7h5dp6.jpg" alt="" />
        </section>
    )
}

function PageSingle() {
    return (
        <div className="PageSingle">
            <Header />
            <main>
                <section className="game">
                    <img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/fgx5lzwlmytqfzhtunzz.jpg" alt="" />
                    <div className="gameInfo">
                        <h2>Nome do Jogo: <br /><span>Totally Accurate Battle Simulator</span></h2>
                        <p>Gêneros: <span>Indie, Simulator, Strategy</span></p>
                        <p>Plataformas: <span>Xbox One, Mac, PC (Microsoft Windows)</span></p>
                        <p>Descrição: <span>A physics based medieval battle simulator which lets you pit wacky waving armies against each other. In Totally Accurate Battle Simulator you pit waving arm men against each other and watch them fight it out.</span></p>
                        <p>Idade Recomendada: <span>ERSB: 10+; PEGI: 16+</span></p>
                    </div>
                </section>
                <section className="similar">
                    <h2>Jogos similares:</h2>
                    <Carrousel games={gamesF} />
                </section>
                <Publisher />
            </main>
        </div>
    )
}
export default PageSingle;