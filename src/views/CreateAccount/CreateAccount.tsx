import './CreateAccount.scss'
import { Link } from 'react-router-dom';

function CreateAccount() {

    return (
        <div className="createAccount">
            <h2>IGDB API</h2>

            <div className='row'>
                <span>Criar uma conta</span>
                <span><Link to='/login'>Fazer</Link> Login?</span>
            </div>

            <form action="">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />

                <label htmlFor="user">Usuário:</label>
                <input type="text" name="user" />

                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" />

                <button>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateAccount;