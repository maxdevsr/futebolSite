import "./style.css"
import cruzeiro from "../../assets/cruzeiro.svg"
import atletico from "../../assets/atleticomg.svg"
import noticias from "../../assets/noticiasIcon.png"
import bayern from "../../assets/bayern.png"
import psg from "../../assets/psg.png"
import liverpool from "../../assets/liverpool.png"
import realmadrid from "../../assets/realmadrid.png"
import leipzig from "../../assets/leipzig.png"
import manchestercity from "../../assets/manchestercity.png"
import borussiadortmund from "../../assets/borussiadortmund.png"
import chelsea from "../../assets/chelsea.png"
import Carousel from "../carousel"
import milan from "../../assets/milan.png"
import tottenham from "../../assets/tottenham.png"

function Content() {
    const games = [
        { imgTimeCasa: psg, timeCasa: 'PSG', votoCasa: '1', votoFora: '1', imgTimeFora: bayern, timeFora: 'Bayern de Munique', hora: 'Hoje 17:00' },
        { imgTimeCasa: liverpool, timeCasa: 'Liverpool', votoCasa: '2', votoFora: '2', imgTimeFora: realmadrid, timeFora: 'Real Madrid', hora: 'Hoje 13:00' },
        { imgTimeCasa: leipzig, timeCasa: 'RB Leipzig', votoCasa: '1', votoFora: '1', imgTimeFora: manchestercity, timeFora: 'Manchester City', hora: 'Hoje 17:00' },
        { imgTimeCasa: borussiadortmund, timeCasa: 'Borussia Dortmund ', votoCasa: '1', votoFora: '1', imgTimeFora: chelsea, timeFora: 'Chelsea', hora: 'Hoje 13:00' },
        { imgTimeCasa: milan, timeCasa: 'Milan ', votoCasa: '3', votoFora: '3', imgTimeFora: tottenham, timeFora: 'Tottenham Hotspur', hora: 'Hoje 17:00' },
    ]
    return (
        <div className="Content">
            <div className="cardPalpite">
                <div className="headerPalpite">
                    <svg className="svgPalpite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM435.2 361.1l-103.9-1.578l-30.67 99.52C286.2 462.2 271.3 464 256 464s-30.19-1.773-44.56-4.93L180.8 359.6L76.83 361.1c-14.93-25.35-24.79-54.01-27.8-84.72L134.3 216.4L100.7 118.1c19.85-22.34 44.32-40.45 72.04-52.62L256 128l83.29-62.47c27.72 12.17 52.19 30.27 72.04 52.62L377.7 216.4l85.23 59.97C459.1 307.1 450.1 335.8 435.2 361.1z" /></svg>
                    Jogos da rodada
                </div>
                <div className="bodyPalpite">
                    <ul className="ulPalpite">
                        {games.map((game, key) => {
                            return (
                                <li key={key} className="liPalpite">
                                    <span className="spanPalpiteTime">
                                        <img className="imgPalpite" src={game.imgTimeCasa} alt="" />
                                        <p>
                                            {game.timeCasa}
                                        </p>
                                    </span>
                                    <input className="inputPalpite" value={game.votoFora}></input>
                                    <div className="spanPalpiteX">
                                        <p>X</p>
                                        <p className="pPalpite">
                                            {game.hora}
                                        </p>
                                    </div>
                                    <input className="inputPalpite" value={game.votoFora}></input>
                                    <span className="spanPalpiteTime">
                                        <img className="imgPalpite" src={game.imgTimeFora} alt="" />
                                        <p>
                                            {game.timeFora}
                                        </p>
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="cardInfo">
                <div className="headerBlog">
                    <img src={noticias} alt="noticias" />
                    Notícias
                </div>
                <section>
                    <div className="contentNoticias">
                        <h1>Cristiano Ronaldo</h1>
                        <article>
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Minus nisi, voluptatibus
                            quos atque porro blanditiis totam.
                        </article>
                    </div>
                    <img src={cruzeiro} alt="Cruzeiro" />
                </section>
                <section>
                    <div className="contentNoticias">
                        <h1>Lionel Messi</h1>
                        <article>
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Minus nisi, voluptatibus
                            quos atque porro blanditiis totam.
                        </article>
                    </div>
                    <img src={atletico} alt="Atletico" />
                </section>
                <section>
                    <Carousel />
                </section>
            </div>
        </div>
    )
}

export default Content