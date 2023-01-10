
function Content() {
    const games = [
        { timeCasa: 'PSG', votoCasa: '_', votoFora: '_' ,timeFora: 'Bayern de Munique' },
        { timeCasa: 'PSG', votoCasa: '_', votoFora: '_' ,timeFora: 'Bayern de Munique' },
        { timeCasa: 'PSG', votoCasa: '_', votoFora: '_' ,timeFora: 'Bayern de Munique' },
        { timeCasa: 'PSG', votoCasa: '_', votoFora: '_' ,timeFora: 'Bayern de Munique' }, 
        { timeCasa: 'PSG', votoCasa: '_', votoFora: '_' ,timeFora: 'Bayern de Munique' }, 
    ]
    return (
        <div className="Content">
            <div className="cardPalpite">
                <div className="headerPalpite">
                    <svg className="svgPalpite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM435.2 361.1l-103.9-1.578l-30.67 99.52C286.2 462.2 271.3 464 256 464s-30.19-1.773-44.56-4.93L180.8 359.6L76.83 361.1c-14.93-25.35-24.79-54.01-27.8-84.72L134.3 216.4L100.7 118.1c19.85-22.34 44.32-40.45 72.04-52.62L256 128l83.29-62.47c27.72 12.17 52.19 30.27 72.04 52.62L377.7 216.4l85.23 59.97C459.1 307.1 450.1 335.8 435.2 361.1z"/></svg>
                    Jogos da rodada
                </div>
                <div className="bodyPalpite">
                    <ul className="ulPalpite">
                        {games.map((game, key) => {
                            return (
                            <li key={key} className="liPalpite">
                            <span>{game.timeCasa}</span>
                            <input className="inputPalpite"></input>
                            <span>X</span>
                            <span>{game.votoFora}</span>
                            <span>{game.timeFora}</span>
                             </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="cardInfo">
            </div>
        </div>
    )
}

export default Content