import React from 'react';
import { ImOmega } from 'react-icons/im';

import { Icon, Content } from './styled';

export default function Login() {
  return (
    <>
      <Icon>
        <ImOmega color="#231F20" className="icon" />
      </Icon>
      <Content>
        <form>
          <label htmlFor="personagem">
            <p>Personagem</p>
            <input type="text" id="personagem" />
          </label>
          <label htmlFor="jogador">
            <p>Jogador</p>
            <input type="text" id="jogador" />
          </label>
          <label htmlFor="senha">
            <p>Senha</p>
            <input type="text" id="senha" />
          </label>
          <footer>
            <button type="submit">Jogar</button>
          </footer>
        </form>
      </Content>
    </>
  );
}
