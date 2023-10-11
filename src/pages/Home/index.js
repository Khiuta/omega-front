import React from 'react';
import { ImOmega } from 'react-icons/im';

import { Info, Content } from './styled';
import Atributos from '../../components/Atributos';
import Detalhes from '../../components/Detalhes';
import Ataques from '../../components/Ataques';
import Habilidades from '../../components/Habilidades';

export default function Home() {
  return (
    <Content>
      <Info>
        <ImOmega color="#231F20" className="icon" />
        <label htmlFor="personagem">
          <p>Personagem</p>
          <input value="Khiuta" id="personagem" />
        </label>
        <label htmlFor="jogador">
          <p>Jogador</p>
          <input value="Miguel" id="jogador" />
        </label>
      </Info>
      <Atributos />
      <Detalhes />
      <Ataques />
      <Habilidades />
    </Content>
  );
}
