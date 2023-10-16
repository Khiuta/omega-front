import React, { useState } from 'react';
import { ImOmega } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Icon, Content } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [name, setName] = useState('');
  const [player, setPlayer] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actions.loginRequest({
      name, player, password, prevPath,
    }));
  };

  return (
    <>
      <Icon>
        <ImOmega color="#231F20" className="icon" />
      </Icon>
      <Content>
        <form onSubmit={handleSubmit}>
          <label htmlFor="personagem">
            <p>Personagem</p>
            <input
              type="text"
              id="personagem"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="jogador">
            <p>Jogador</p>
            <input
              type="text"
              id="jogador"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
            />
          </label>
          <label htmlFor="senha">
            <p>Senha</p>
            <input
              type="password"
              id="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <footer>
            <button type="submit">Jogar</button>
          </footer>
        </form>
      </Content>
    </>
  );
}
