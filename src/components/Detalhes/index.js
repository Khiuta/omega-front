import React from 'react';

import { Details } from './styled';

export default function Detalhes() {
  return (
    <Details>
      <header>
        <p>Detalhes</p>
      </header>
      <section className="origem-classe">
        <label htmlFor="origem" className="label-origem">
          Origem
          <input type="text" id="origem" />
        </label>
        <label htmlFor="classe" className="label-classe">
          Classe
          <input type="text" id="classe" />
        </label>
      </section>
      <section className="nivel-desl">
        <label htmlFor="nivel">
          Nível
          <input type="text" id="nivel" value={10} />
        </label>
        <label htmlFor="desl">
          Desl.
          <input type="text" id="desl" value={9} />
        </label>
      </section>
      <section className="pv">
        <label htmlFor="pv-max">
          PV máx.
          <input type="text" id="pv-max" value={40} />
        </label>
        <label htmlFor="pv-atual">
          PV atual
          <input type="text" id="pv-atual" value={25} />
        </label>
      </section>
      <section className="sanidade">
        <label htmlFor="san-max">
          San. máx.
          <input type="text" id="san-max" value={30} />
        </label>
        <label htmlFor="san-atual">
          San. atual
          <input type="text" id="san-atual" value={24} />
        </label>
      </section>
      <section className="pe">
        <label htmlFor="pe-max">
          PE máx.
          <input type="text" id="pe-max" value={32} />
        </label>
        <label htmlFor="pe-atual">
          PE atual
          <input type="text" id="pe-atual" value={23} />
        </label>
      </section>
      <section className="defesa">
        <label htmlFor="def">
          Defesa
          <input type="number" id="def" value={21} />
        </label>
      </section>
      <section className="protecao">
        <label htmlFor="protec">
          Proteção
          <input type="text" value="Colete leve" id="protec" />
        </label>
        <label htmlFor="resist">
          Resistências
          <textarea type="text" value="18 DC" id="resist" />
        </label>
      </section>
      <section className="equip">
        <label htmlFor="equip">
          Equip.
          <input type="number" id="equip" />
        </label>
        <label htmlFor="outros">
          Outros
          <input type="number" id="outros" />
        </label>
      </section>
    </Details>
  );
}
