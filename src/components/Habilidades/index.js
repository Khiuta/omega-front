import React from 'react';
import { BsQuestionLg, BsPlusSquare } from 'react-icons/bs';

import { Habi } from './styled';

export default function Habilidades() {
  const habilidades = [
    {
      id: 1,
      name: 'poggers',
      cost: '3 PE',
    },
  ];

  return (
    <Habi>
      <header>
        <p>Habilidades</p>
      </header>
      <main>
        {habilidades && habilidades.map((hab) => (
          <div key={hab.id}>
            <section className="nome-hab">
              Nome
              <input type="text" id="nome-hab" />
            </section>
            <section className="custo-hab">
              Custo
              <input type="text" id="custo-hab" />
            </section>
            <section className="icon">
              <BsQuestionLg size={25} />
            </section>
          </div>
        ))}
        <div className="adicionar">
          <BsPlusSquare size={30} />
        </div>
      </main>
    </Habi>
  );
}
