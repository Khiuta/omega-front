import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';

import { Ataq } from './styled';

export default function Ataques() {
  const numAtaques = [1, 2];

  return (
    <Ataq>
      <header>
        <p>Ataques</p>
      </header>
      <main>
        {numAtaques && numAtaques.map((atq) => (
          <div key={atq.id}>
            <label htmlFor="nome-atq" className="nome-atq">
              Nome
              <input type="text" value={atq.name} id="nome-atq" />
            </label>
            <label htmlFor="test-atq" className="test-atq">
              Teste
              <input type="text" value={atq.test} id="test-atq" />
            </label>
            <label htmlFor="dmg-atq" className="dmg-atq">
              Dano
              <input type="text" value={atq.damage} id="dmg-atq" />
            </label>
            <label htmlFor="outros-atq" className="outros-atq">
              <p>Crít./Alcance</p>
              <input type="text" value={atq.others} id="outros-atq" />
            </label>
          </div>
        ))}
        <div className="adicionar">
          <BsPlusSquare
            size={30}
          />
        </div>
      </main>
    </Ataq>
  );
}
