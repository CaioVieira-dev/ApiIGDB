import { Link } from 'react-router-dom';
import './Login.scss'

function Login() {

    return (
        <div className="login">
            <h2>IGDB API</h2>

            <div className='row'>
                <span>Fazer Login</span>
                <span><Link to='/create-account'>Criar</Link> uma conta?</span>
            </div>

            <form action="">
                <label htmlFor="user">Usuário/Email:</label>
                <input type="text" name="user" />

                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" />

                <button>Entrar</button>
            </form>
            <span>ou</span>
            <button className='gLogin'><img src="/images/googleG.svg" alt="" />Entrar com o google</button>
        </div>
    )
}

export default Login;