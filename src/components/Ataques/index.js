import React, { useState, useEffect } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { FiSave } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';

import { Ataq } from './styled';

export default function Ataques() {
  const id = useSelector((state) => state.auth.user.id);
  const [info, setInfo] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [test, setTest] = useState('');
  const [damage, setDamage] = useState('');
  const [others, setOthers] = useState('');

  async function getData() {
    const response = await axios.get(`/attack/${id}`);
    setData(response.data);
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  const handleCreate = async () => {
    await axios.post('/attack', {
      character_id: id,
    });
    getData();
    alert('Ataque criado.');
  };

  const handleSave = async () => {
    await axios.put(`/attack/${info}`, {
      name, test, damage, others, character_id: id,
    });
    setName('');
    setTest('');
    setDamage('');
    setOthers('');
    getData();
    alert('Ataque atualizado.');
  };

  const handleCheck = (identifier) => {
    // const newInfo = info === identifier ? false : identifier;
    setInfo(identifier);
  };

  return (
    <Ataq>
      <header>
        <p>Ataques</p>
        <FiSave className="save" size={30} onClick={handleSave} />
      </header>
      <main>
        {data && data.map((atq) => {
          if (info === atq.id) {
            return (
              <div key={atq.id}>
                <label htmlFor="nome-atq" className="nome-atq">
                  Nome
                  <input
                    type="text"
                    placeholder={atq.name}
                    id="nome-atq"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => handleCheck(atq.id)}
                  />
                </label>
                <label htmlFor="test-atq" className="test-atq">
                  Teste
                  <input
                    type="text"
                    placeholder={atq.test}
                    value={test}
                    id="test-atq"
                    onChange={(e) => setTest(e.target.value)}
                    onFocus={() => handleCheck(atq.id)}
                  />
                </label>
                <label htmlFor="dmg-atq" className="dmg-atq">
                  Dano
                  <input
                    type="text"
                    placeholder={atq.damage}
                    value={damage}
                    id="dmg-atq"
                    onChange={(e) => setDamage(e.target.value)}
                    onFocus={() => handleCheck(atq.id)}
                  />
                </label>
                <label htmlFor="outros-atq" className="outros-atq">
                  <p>Crít./Alcance</p>
                  <input
                    type="text"
                    placeholder={atq.others}
                    value={others}
                    id="outros-atq"
                    onChange={(e) => setOthers(e.target.value)}
                    onFocus={() => handleCheck(atq.id)}
                  />
                </label>
              </div>
            );
          }

          return (
            <div key={atq.id}>
              <label htmlFor="nome-atq" className="nome-atq">
                Nome
                <input
                  type="text"
                  id="nome-atq"
                  value={atq.name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleCheck(atq.id)}
                />
              </label>
              <label htmlFor="test-atq" className="test-atq">
                Teste
                <input
                  type="text"
                  value={atq.test}
                  id="test-atq"
                  onChange={(e) => setTest(e.target.value)}
                  onFocus={() => handleCheck(atq.id)}
                />
              </label>
              <label htmlFor="dmg-atq" className="dmg-atq">
                Dano
                <input
                  type="text"
                  value={atq.damage}
                  id="dmg-atq"
                  onChange={(e) => setDamage(e.target.value)}
                  onFocus={() => handleCheck(atq.id)}
                />
              </label>
              <label htmlFor="outros-atq" className="outros-atq">
                <p>Crít./Alcance</p>
                <input
                  type="text"
                  value={atq.others}
                  id="outros-atq"
                  onChange={(e) => setOthers(e.target.value)}
                  onFocus={() => handleCheck(atq.id)}
                />
              </label>
            </div>
          );
        })}
        <div className="adicionar">
          <BsPlusSquare
            size={30}
            onClick={handleCreate}
          />
        </div>
      </main>
    </Ataq>
  );
}
