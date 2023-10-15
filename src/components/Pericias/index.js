import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';

import { Peri } from './styled';

export default function Pericias() {
  const id = useSelector((state) => state.auth.user.id);
  const [isLoading, setIsLoading] = useState(false);
  const [strengths, setStrengths] = useState([]);
  const [intel, setIntel] = useState([]);
  const [pres, setPres] = useState([]);
  const [vig, setVig] = useState([]);
  const [agil, setAgil] = useState([]);

  async function getData() {
    setIsLoading(true);
    const response = await axios.get(`/strength/${id}`);
    const response2 = await axios.get(`/intelect/${id}`);
    const response3 = await axios.get(`/presence/${id}`);
    const response4 = await axios.get(`/vigor/${id}`);
    const response5 = await axios.get(`/agility/${id}`);
    setStrengths(response.data);
    setIntel(response2.data);
    setPres(response3.data);
    setVig(response4.data);
    setAgil(response5.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(strengths);
  console.log(intel);
  console.log(pres);
  console.log(vig);
  console.log(agil);

  if (isLoading) return <p>Carregando...</p>;

  if (
    !strengths.length
    && !intel.length
    && !pres.length
    && !vig.length
    && !agil.length
  ) return <p>Carregando...</p>;

  return (
    <Peri>
      <header>
        <p>Perícias</p>
      </header>
      <div>
        <p><strong>+Penalidade de carga *Somente treinado</strong></p>
      </div>
      <main>
        <section className="ident">
          <p id="ident-maior">Nome</p>
          <p id="ident-menor">Dados</p>
          <p id="ident-menor">Treino</p>
          <p id="ident-menor">Bônus</p>
          <p id="ident-menor">Outros</p>
        </section>
        <section className="pericias">
          <p id="nome">+Acrobacia</p>
          <input type="text" value={agil[0].value} readOnly id="dados" />
          <input type="text" value={agil[0].acrobacy_training} readOnly id="treino" />
          <input type="text" value={agil[0].acrobacy_bonus} readOnly id="bonus" />
          <input type="text" value={agil[0].acrobacy_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*Adestramento</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].taming_training} readOnly id="treino" />
          <input type="text" value={pres[0].taming_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].taming_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Atletismo</p>
          <input type="text" value={strengths[0].value} readOnly id="dados" />
          <input type="text" value={strengths[0].athleticism_training} readOnly id="treino" />
          <input type="text" value={strengths[0].athleticism_bonus} readOnly id="bonus" />
          <input type="text" value={strengths[0].athleticism_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*Ciências</p>
          <input type="text" value={intel[0].value} readOnly id="dados" />
          <input type="text" value={intel[0].science_training} readOnly id="treino" />
          <input type="text" value={intel[0].science_bonus} readOnly id="bonus" />
          <input type="text" value={intel[0].science_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*+Crime</p>
          <input type="text" value={agil[0].value} readOnly id="dados" />
          <input type="text" value={agil[0].crime_training} readOnly id="treino" />
          <input type="text" value={agil[0].crime_bonus} readOnly id="bonus" />
          <input type="text" value={agil[0].crime_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Diplomacia</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].diplomacy_training} readOnly id="treino" />
          <input type="text" value={pres[0].diplomacy_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].diplomacy_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Enganação</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].tricking_training} readOnly id="treino" />
          <input type="text" value={pres[0].tricking_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].tricking_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Fortitude</p>
          <input type="text" value={vig[0].value} readOnly id="dados" />
          <input type="text" value={vig[0].fortitude_training} readOnly id="treino" />
          <input type="text" value={vig[0].fortitude_bonus} readOnly id="bonus" />
          <input type="text" value={vig[0].fortitude_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">+Furtividade</p>
          <input type="text" value={agil[0].value} readOnly id="dados" />
          <input type="text" value={agil[0].stealth_training} readOnly id="treino" />
          <input type="text" value={agil[0].stealth_bonus} readOnly id="bonus" />
          <input type="text" value={agil[0].stealth_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Iniciativa</p>
          <input type="text" value={agil[0].value} readOnly id="dados" />
          <input type="text" value={agil[0].iniciative_training} readOnly id="treino" />
          <input type="text" value={agil[0].iniciative_bonus} readOnly id="bonus" />
          <input type="text" value={agil[0].iniciative_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Intimidação</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].intimidation_training} readOnly id="treino" />
          <input type="text" value={pres[0].intimidation_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].intimidation_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Intuição</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].intuition_training} readOnly id="treino" />
          <input type="text" value={pres[0].intuition_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].intuition_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Investigação</p>
          <input type="text" value={intel[0].value} readOnly id="dados" />
          <input type="text" value={intel[0].investigation_training} readOnly id="treino" />
          <input type="text" value={intel[0].investigation_bonus} readOnly id="bonus" />
          <input type="text" value={intel[0].investigation_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Luta</p>
          <input type="text" value={strengths[0].value} readOnly id="dados" />
          <input type="text" value={strengths[0].fighting_training} readOnly id="treino" />
          <input type="text" value={strengths[0].fighting_bonus} readOnly id="bonus" />
          <input type="text" value={strengths[0].fighting_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Medicina</p>
          <input type="text" value={intel[0].value} readOnly id="dados" />
          <input type="text" value={intel[0].medicine_training} readOnly id="treino" />
          <input type="text" value={intel[0].medicine_bonus} readOnly id="bonus" />
          <input type="text" value={intel[0].medicine_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Percepção</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].sight_training} readOnly id="treino" />
          <input type="text" value={pres[0].sight_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].sight_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*Pilotagem</p>
          <input type="text" value={agil[0].value} readOnly id="dados" />
          <input type="text" value={agil[0].driving_training} readOnly id="treino" />
          <input type="text" value={agil[0].driving_bonus} readOnly id="bonus" />
          <input type="text" value={agil[0].driving_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Pontaria</p>
          <input type="text" value={agil[0].value} readOnly id="dados" />
          <input type="text" value={agil[0].aiming_training} readOnly id="treino" />
          <input type="text" value={agil[0].aiming_bonus} readOnly id="bonus" />
          <input type="text" value={agil[0].aiming_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*Profissão</p>
          <input type="text" value={intel[0].value} readOnly id="dados" />
          <input type="text" value={intel[0].profession_training} readOnly id="treino" />
          <input type="text" value={intel[0].profession_bonus} readOnly id="bonus" />
          <input type="text" value={intel[0].profession_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Reflexos</p>
          <input type="text" value={agil[0].value} readOnly id="dados" />
          <input type="text" value={agil[0].reflexes_training} readOnly id="treino" />
          <input type="text" value={agil[0].reflexes_bonus} readOnly id="bonus" />
          <input type="text" value={agil[0].reflexes_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*Religião</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].religion_training} readOnly id="treino" />
          <input type="text" value={pres[0].religion_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].religion_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Sobrevivência</p>
          <input type="text" value={intel[0].value} readOnly id="dados" />
          <input type="text" value={intel[0].survival_training} readOnly id="treino" />
          <input type="text" value={intel[0].survival_bonus} readOnly id="bonus" />
          <input type="text" value={intel[0].survival_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*Tática</p>
          <input type="text" value={intel[0].value} readOnly id="dados" />
          <input type="text" value={intel[0].tactics_training} readOnly id="treino" />
          <input type="text" value={intel[0].tactics_bonus} readOnly id="bonus" />
          <input type="text" value={intel[0].tactics_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">*Tática</p>
          <input type="text" value={intel[0].value} readOnly id="dados" />
          <input type="text" value={intel[0].tech_training} readOnly id="treino" />
          <input type="text" value={intel[0].tech_bonus} readOnly id="bonus" />
          <input type="text" value={intel[0].tech_others} readOnly id="outros" />
        </section>
        <section className="pericias">
          <p id="nome">Vontade</p>
          <input type="text" value={pres[0].value} readOnly id="dados" />
          <input type="text" value={pres[0].will_training} readOnly id="treino" />
          <input type="text" value={pres[0].will_bonus} readOnly id="bonus" />
          <input type="text" value={pres[0].will_others} readOnly id="outros" />
        </section>
      </main>
    </Peri>
  );
}
