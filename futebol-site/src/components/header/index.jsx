import Logo from "../../assets/logo_topo.png"

function Header() {
    const leagues = [
        { nome: 'Premier League', pais: 'Inglaterra' },
        { nome: 'La Liga', pais: 'Espanha' },
        { nome: 'Serie A', pais: 'Itália' },
        { nome: 'Ligue 1', pais: 'França' },
        { nome: 'Bundesliga', pais: 'Alemanha' },
        { nome: 'Eredivisie', pais: 'Holanda' },
        { nome: 'Primeira Liga', pais: 'Portugal' },
        { nome: 'Superliga Argentina', pais: 'Argentina' },
        { nome: 'Campeonato Brasileiro', pais: 'Brasil' },
        { nome: 'Liga MX', pais: 'México' },
        { nome: 'Major League Soccer', pais: 'Estados Unidos' },
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
                {leagues.map((league, key) => <li key={key}>{league.nome}</li>)}
            </ul>
        </header>
    )
}

export default Header