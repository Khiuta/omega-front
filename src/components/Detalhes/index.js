import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FiSave } from 'react-icons/fi';
import axios from '../../services/axios';

import { Details } from './styled';

export default function Detalhes() {
  const character = useSelector((state) => state.auth.user);
  const [char, setChar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [current_pv, setCurrent_pv] = useState('');
  const [current_san, setCurrent_san] = useState('');
  const [current_pe, setCurrent_pe] = useState('');
  const [defense, setDefense] = useState('');
  const [protection, setProtection] = useState('');
  const [resistence, setResistence] = useState('');
  const [equipments, setEquipments] = useState('');
  const [others, setOthers] = useState('');
  const [changing, setChanging] = useState(false);

  async function getData() {
    setIsLoading(true);
    const response = await axios.get('/character');
    setChar(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChange = () => {
    setChanging(true);
    console.log(char);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/character/${character.id}`, {
        current_pv,
        current_san,
        current_pe,
        defense,
        protection,
        resistence,
        equipments,
        others,
      });
      alert('Dados atualizados.');
    } catch (e) {
      return console.log(e);
    }
  };

  if (isLoading) {
    return (
      <Details>
        <header>
          <p>Detalhes</p>
        </header>
        <div className="loader-father">
          <div className="loader" />
        </div>
      </Details>
    );
  }

  if (changing) {
    return (
      <Details>
        <header>
          <p>Detalhes</p>
          <FiSave className="save" size={30} onClick={handleSave} />
        </header>
        <section className="origem-classe">
          <label htmlFor="origem" className="label-origem">
            Origem
            <input type="text" id="origem" readOnly value={character.origin} />
          </label>
          <label htmlFor="classe" className="label-classe">
            Classe
            <input type="text" id="classe" readOnly value={character.class} />
          </label>
        </section>
        <section className="nivel-desl">
          <label htmlFor="nivel">
            Nível
            <input type="text" id="nivel" readOnly value={character.level} />
          </label>
          <label htmlFor="desl">
            Desl.
            <input type="text" id="desl" readOnly value={character.movement} />
          </label>
        </section>
        <section className="pv">
          <label htmlFor="pv-max">
            PV máx.
            <input type="text" id="pv-max" readOnly value={character.max_pv} />
          </label>
          <label htmlFor="pv-atual">
            PV atual
            <input
              type="text"
              id="pv-atual"
              placeholder={char[0].current_pv}
              value={current_pv}
              onClick={handleChange}
              onChange={(e) => setCurrent_pv(e.target.value)}
            />
          </label>
        </section>
        <section className="sanidade">
          <label htmlFor="san-max">
            San. máx.
            <input type="text" id="san-max" readOnly value={character.max_san} />
          </label>
          <label htmlFor="san-atual">
            San. atual
            <input
              type="text"
              id="san-atual"
              placeholder={char[0].current_san}
              value={current_san}
              onChange={(e) => setCurrent_san(e.target.value)}
              onClick={handleChange}
            />
          </label>
        </section>
        <section className="pe">
          <label htmlFor="pe-max">
            PE máx.
            <input type="text" id="pe-max" readOnly value={character.max_pe} />
          </label>
          <label htmlFor="pe-atual">
            PE atual
            <input
              type="text"
              id="pe-atual"
              placeholder={char[0].current_pe}
              value={current_pe}
              onClick={handleChange}
              onChange={(e) => setCurrent_pe(e.target.value)}
            />
          </label>
        </section>
        <section className="defesa">
          <label htmlFor="def">
            Defesa
            <input
              type="number"
              id="def"
              placeholder={char[0].defense}
              value={defense}
              onChange={(e) => setDefense(e.target.value)}
              onClick={handleChange}
            />
          </label>
        </section>
        <section className="protecao">
          <label htmlFor="protec">
            Proteção
            <input
              type="text"
              placeholder={char[0].protection}
              value={protection}
              onChange={(e) => setProtection(e.target.value)}
              onClick={handleChange}
              id="protec"
            />
          </label>
          <label htmlFor="resist">
            Resistências
            <textarea
              type="text"
              placeholder={char[0].resistence}
              value={resistence}
              onChange={(e) => setResistence(e.target.value)}
              onClick={handleChange}
              id="resist"
            />
          </label>
        </section>
        <section className="equip">
          <label htmlFor="equip">
            Equip.
            <input
              type="number"
              id="equip"
              placeholder={char[0].equipments}
              onClick={handleChange}
              value={equipments}
              onChange={(e) => setEquipments(e.target.value)}
            />
          </label>
          <label htmlFor="outros">
            Outros
            <input
              type="number"
              id="outros"
              placeholder={char[0].others}
              onClick={handleChange}
              value={others}
              onChange={(e) => setOthers(e.target.value)}
            />
          </label>
        </section>
      </Details>
    );
  }

  if (
    char.length !== 0
  ) {
    return (
      <Details>
        <header>
          <p>Detalhes</p>
          <FiSave className="save" size={30} />
        </header>
        <section className="origem-classe">
          <label htmlFor="origem" className="label-origem">
            Origem
            <input type="text" id="origem" readOnly value={character.origin} />
          </label>
          <label htmlFor="classe" className="label-classe">
            Classe
            <input type="text" id="classe" readOnly value={character.class} />
          </label>
        </section>
        <section className="nivel-desl">
          <label htmlFor="nivel">
            Nível
            <input type="text" id="nivel" readOnly value={character.level} />
          </label>
          <label htmlFor="desl">
            Desl.
            <input type="text" id="desl" readOnly value={character.movement} />
          </label>
        </section>
        <section className="pv">
          <label htmlFor="pv-max">
            PV máx.
            <input type="text" id="pv-max" readOnly value={character.max_pv} />
          </label>
          <label htmlFor="pv-atual">
            PV atual
            <input type="text" id="pv-atual" value={char[0].current_pv} onClick={handleChange} />
          </label>
        </section>
        <section className="sanidade">
          <label htmlFor="san-max">
            San. máx.
            <input type="text" id="san-max" readOnly value={character.max_san} />
          </label>
          <label htmlFor="san-atual">
            San. atual
            <input type="text" id="san-atual" value={char[0].current_san} onClick={handleChange} />
          </label>
        </section>
        <section className="pe">
          <label htmlFor="pe-max">
            PE máx.
            <input type="text" id="pe-max" readOnly value={character.max_pe} />
          </label>
          <label htmlFor="pe-atual">
            PE atual
            <input type="text" id="pe-atual" value={char[0].current_pe} onClick={handleChange} />
          </label>
        </section>
        <section className="defesa">
          <label htmlFor="def">
            Defesa
            <input type="number" id="def" value={char[0].defense} onClick={handleChange} />
          </label>
        </section>
        <section className="protecao">
          <label htmlFor="protec">
            Proteção
            <input type="text" value={char[0].protection} onClick={handleChange} id="protec" />
          </label>
          <label htmlFor="resist">
            Resistências
            <textarea type="text" value={char[0].resistence} onClick={handleChange} id="resist" />
          </label>
        </section>
        <section className="equip">
          <label htmlFor="equip">
            Equip.
            <input type="number" id="equip" onClick={handleChange} value={char[0].equipments} />
          </label>
          <label htmlFor="outros">
            Outros
            <input type="number" id="outros" onClick={handleChange} value={char[0].others} />
          </label>
        </section>
      </Details>
    );
  }
}
