import React, { useEffect, useState } from 'react';
import { BsQuestionLg, BsPlusSquare } from 'react-icons/bs';
import { FiSave } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';

import { Inv } from './styled';

export default function Inventário() {
  const id = useSelector((state) => state.auth.user.id);
  const [info, setInfo] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [slots, setSlots] = useState('');
  const [description, setDescription] = useState('');

  async function getData() {
    const response = await axios.get(`/item/${id}`);
    setData(response.data);
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  const handleCreate = async () => {
    await axios.post('/item', {
      character_id: id,
    });
    getData();
    alert('Item criado.');
  };

  const handleSave = async () => {
    await axios.put(`/item/${info}`, {
      name, slots, description, character_id: id,
    });
    setName('');
    setSlots('');
    setDescription('');
    getData();
    alert('Item atualizado.');
  };

  const handleCheck = (identifier) => {
    // const newInfo = info === identifier ? false : identifier;
    setInfo(identifier);
  };

  return (
    <Inv>
      <header>
        <p>Inventário</p>
        <FiSave className="save" size={30} onClick={handleSave} />
      </header>
      <main>

        {data && data.map((item) => {
          if (info === item.id) {
            return (
              <div>
                <section key={item.id} className="nome-item">
                  <p>Nome</p>
                  <input
                    type="text"
                    placeholder={item.name}
                    value={name}
                    id="nome-item"
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => handleCheck(item.id)}
                  />
                </section>
                <section className="esp-item">
                  <p>Espaços</p>
                  <input
                    type="text"
                    placeholder={item.slots}
                    value={slots}
                    id="esp-item"
                    onChange={(e) => setSlots(e.target.value)}
                    onFocus={() => handleCheck(item.id)}
                  />
                </section>
                <section className="desc-hab">
                  Descrição
                  <textarea
                    type="text"
                    id="desc-hab"
                    placeholder={item.description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onFocus={() => handleCheck(item.id)}
                  />
                </section>
                <span />
              </div>
            );
          }

          return (
            <div>
              <section key={item.id} className="nome-item">
                <p>Nome</p>
                <input
                  type="text"
                  value={item.name}
                  id="nome-item"
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleCheck(item.id)}
                />
              </section>
              <section className="esp-item">
                <p>Espaços</p>
                <input
                  type="text"
                  value={item.slots}
                  id="esp-item"
                  onChange={(e) => setSlots(e.target.value)}
                  onFocus={() => handleCheck(item.id)}
                />
              </section>
              <section className="desc-hab">
                Descrição
                <textarea
                  type="text"
                  id="desc-hab"
                  value={item.description}
                  onChange={(e) => setDescription(e.target.value)}
                  onFocus={() => handleCheck(item.id)}
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
    </Inv>
  );
}
