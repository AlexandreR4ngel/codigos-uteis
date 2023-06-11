// Exemplo de função genérica que salva o estado de um input HTML

import React from 'react';

class Login extends React.Component { // Estrutura básica de componente react com classe
    state = {
        email: '',
        password: '',
    }

    onInputChange = ({ target }) => { //Função genérica
        const { name, value } = target;
        this.setState({ [name]: value });
      }

    render() {
        const { email, password } = this.state;

        return (
            <form>
                <input
                    name="email"
                    value={ email }
                    type="text"
                    placeholder="Digite seu Email"
                    onChange={ this.onInputChange }
                />

                <input
                    name="password"
                    value={ password }
                    type="password"
                    placeholder="Senha"
                    onChange={ this.onInputChange }
                />
            </form>
        )
    }
}

export default Login
