import Logo from "../../assets/logo_topo.png"
import PatchPremier from "../../assets/premier.png"
import PatchSerieA from "../../assets/Serie_A.png"
import PatchLigue1 from "../../assets/ligue1.svg"
import PatchBundesliga from "../../assets/bundesliga.svg"
import PatchEredivisie from "../../assets/eredivisie.svg"
import PatchLigaNOS from "../../assets/LigaNOS.png"
import PatchSupArg from "../../assets/ligaArgentina.png"
import PatchBrasileirao from "../../assets/brasileiro.svg"
import PatchLigaMX from "../../assets/mexican.png"
import PatchMLS from "../../assets/MLS.svg"
import PatchLaliga from "../../assets/laliga.svg"
function Header() {
    const leagues = [
        { nome: 'Premier League', pais: 'Inglaterra', imagem: PatchPremier },
        { nome: 'La Liga', pais: 'Espanha', imagem: PatchLaliga },
        { nome: 'Serie A', pais: 'Itália', imagem: PatchSerieA },
        { nome: 'Ligue 1', pais: 'França', imagem: PatchLigue1 },
        { nome: 'Bundesliga', pais: 'Alemanha', imagem: PatchBundesliga },
        { nome: 'Eredivisie', pais: 'Holanda', imagem: PatchEredivisie },
        { nome: 'Primeira Liga', pais: 'Portugal', imagem: PatchLigaNOS },
        { nome: 'Liga Argentina', pais: 'Argentina', imagem: PatchSupArg },
        { nome: 'Brasileirão', pais: 'Brasil', imagem: PatchBrasileirao },
        { nome: 'Liga MX', pais: 'México', imagem: PatchLigaMX },
        { nome: 'M.L.S', pais: 'Estados Unidos', imagem: PatchMLS },
    ]
    return (
        <header>
            <div className="Header1">
                <span>Palpitar</span>
                <span>Resultados</span>
                <img src={Logo} alt="palpite.com" />
                <span>Cadastre-se</span>
                <span>Login</span>
            </div>
            <ul className="subHeader">
                {leagues.map((league, key) => <li key={key}> <img src={league.imagem} alt="" /> <span> {league.nome}</span></li>)}
            </ul>
        </header>
    )
}

export default Header