import React from 'react';
import { useSelector } from 'react-redux';

import { Att } from './styled';

export default function Atributos() {
  let character = [];
  character = useSelector((state) => state.auth.user);
  console.log(character);
  const strengths = Object.values(character.Strengths);
  const intel = Object.values(character.Intelects);
  const pres = Object.values(character.Presences);
  const vig = Object.values(character.Vigors);
  const agil = Object.values(character.Agilities);

  return (
    <Att>
      <header>
        <p>Atributos</p>
      </header>
      <main>
        <label htmlFor="forca">
          Força
          <input value={strengths[0].value} id="forca" />
        </label>
        <label htmlFor="forca">
          Intel.
          <input value={intel[0].value} id="forca" />
        </label>
        <label htmlFor="forca">
          Pres.
          <input value={pres[0].value} id="forca" />
        </label>
        <label htmlFor="forca">
          Vigor
          <input value={vig[0].value} id="forca" />
        </label>
        <label htmlFor="forca">
          Agili.
          <input value={agil[0].value} id="forca" />
        </label>
      </main>
    </Att>
  );
}
