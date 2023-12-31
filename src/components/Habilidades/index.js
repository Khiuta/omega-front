import React, { useState, useEffect, useRef } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { FiSave } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';

import { Habi } from './styled';

export default function Habilidades() {
  const id = useSelector((state) => state.auth.user.id);
  const [info, setInfo] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const isMounted = useRef(false);

  async function getData() {
    try {
      const response = await axios.get(`/ability/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      getData();
    }
  }, []);

  const handleCreate = async () => {
    await axios.post('/ability', {
      character_id: id,
    });
    getData();
    alert('Habilidade criada.');
  };

  const handleSave = async () => {
    await axios.put(`/ability/${info}`, {
      name, cost, description, character_id: id,
    });
    setName('');
    setCost('');
    setDescription('');
    getData();
    alert('Habilidade atualizada.');
  };

  const handleCheck = (identifier) => {
    // const newInfo = info === identifier ? false : identifier;
    setInfo(identifier);
  };

  return (
    <Habi>
      <header>
        <p>Habilidades</p>
        <FiSave className="save" size={30} onClick={handleSave} />
      </header>
      <main>
        {data && data.map((hab) => {
          if (info === hab.id) {
            return (
              <div key={hab.id}>
                <section className="nome-hab">
                  Nome
                  <input
                    type="text"
                    placeholder={hab.name}
                    id="nome-hab"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => handleCheck(hab.id)}
                  />
                </section>
                <section className="custo-hab">
                  Custo
                  <input
                    type="text"
                    placeholder={hab.cost}
                    id="custo-hab"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    onFocus={() => handleCheck(hab.id)}
                  />
                </section>
                <section className="desc-hab">
                  Descrição
                  <textarea
                    type="text"
                    id="desc-hab"
                    value={description}
                    placeholder={hab.description}
                    onChange={(e) => setDescription(e.target.value)}
                    onFocus={() => handleCheck(hab.id)}
                  />
                </section>
                <span />
              </div>
            );
          }

          return (
            <div key={hab.id}>
              <section className="nome-hab">
                Nome
                <input
                  type="text"
                  id="nome-hab"
                  value={hab.name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleCheck(hab.id)}
                />
              </section>
              <section className="custo-hab">
                Custo
                <input
                  type="text"
                  id="custo-hab"
                  value={hab.cost}
                  onChange={(e) => setCost(e.target.value)}
                  onFocus={() => handleCheck(hab.id)}
                />
              </section>
              <section className="desc-hab">
                Descrição
                <textarea
                  type="text"
                  id="desc-hab"
                  value={hab.description}
                  onChange={(e) => setDescription(e.target.value)}
                  onFocus={() => handleCheck(hab.id)}
                />
              </section>
              <span />
            </div>
          );
        })}
        <div className="adicionar">
          <BsPlusSquare size={30} onClick={handleCreate} />
        </div>
      </main>
    </Habi>
  );
}
