import React, { useState } from 'react';
import { ImOmega } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';

import { Info, Content } from './styled';
import Atributos from '../../components/Atributos';
import Detalhes from '../../components/Detalhes';
import Ataques from '../../components/Ataques';
import Habilidades from '../../components/Habilidades';
import Inventário from '../../components/Inventário';
import Pericias from '../../components/Pericias';
import Rolagem from '../../components/Rolagem';

export default function Home() {
  const player = useSelector((state) => state.auth.user.player);
  const name = useSelector((state) => state.auth.user.name);
  const [roll, setRoll] = useState(false);

  const handleRoll = () => {
    const newRoll = roll;
    setRoll(!newRoll);
  };

  return (
    <>
      <Content>
        <Info>
          <ImOmega color="#231F20" className="icon" onClick={handleRoll} />
          <label htmlFor="personagem">
            <p>Personagem</p>
            <input value={name} id="personagem" />
          </label>
          <label htmlFor="jogador">
            <p>Jogador</p>
            <input value={player} id="jogador" />
          </label>
        </Info>
        {roll ? <header className="close"><AiFillCloseCircle size={30} onClick={handleRoll} /></header> : <></>}
        <Rolagem isRolling={roll} />
        <Atributos />
        <Detalhes />
        <Ataques />
        <Habilidades />
        <Inventário />
        <Pericias />
      </Content>
    </>
  );
}
