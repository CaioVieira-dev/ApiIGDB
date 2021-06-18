import Header from './components/Header/Header'

import './components/Header/Header.scss';
import './PageSingle.scss';

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
            </main>
        </div>
    )
}
export default PageSingle;