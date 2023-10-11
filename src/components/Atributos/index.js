import React from 'react';

import { Att } from './styled';

export default function Atributos() {
  return (
    <Att>
      <header>
        <p>Atributos</p>
      </header>
      <main>
        <label htmlFor="forca">
          Força
          <input value={1} id="forca" />
        </label>
        <label htmlFor="forca">
          Intel.
          <input value={1} id="forca" />
        </label>
        <label htmlFor="forca">
          Pres.
          <input value={1} id="forca" />
        </label>
        <label htmlFor="forca">
          Vigor
          <input value={1} id="forca" />
        </label>
        <label htmlFor="forca">
          Agili.
          <input value={1} id="forca" />
        </label>
      </main>
    </Att>
  );
}
