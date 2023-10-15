import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';

import { Container } from './styled';

export default function Rolagem({ isRolling }) {
  const id = useSelector((state) => state.auth.user.id);
  const [isLoading, setIsLoading] = useState(false);
  const [strengths, setStrengths] = useState([]);
  const [intel, setIntel] = useState([]);
  const [pres, setPres] = useState([]);
  const [vig, setVig] = useState([]);
  const [agil, setAgil] = useState([]);
  const [pericia, setPericia] = useState('');
  const [dt, setDt] = useState('');
  const [result, setResult] = useState([]);
  const [bns, setBns] = useState(0);
  const nums = [];
  let dados = null;

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

  const handleFill = (e) => {
    const atr = e.target.value;
    switch (atr) {
      case 'acrobacia':
        dados = agil[0].value;
        setBns(agil[0].acrobacy_bonus);
        break;
      case 'adestramento':
        dados = pres[0].value;
        setBns(pres[0].taming_bonus);
        break;
      case 'atletismo':
        dados = strengths[0].value;
        setBns(strengths[0].athleticism_bonus);
        break;
      case 'ciencias':
        dados = intel[0].value;
        setBns(intel[0].sciente_bonus);
        break;
      case 'crime':
        dados = agil[0].value;
        setBns(agil[0].crime_bonus);
        break;
      case 'diplomacia':
        dados = pres[0].value;
        setBns(pres[0].diplomacy_bonus);
        break;
      case 'enganacao':
        dados = pres[0].value;
        setBns(pres[0].tricking_bonus);
        break;
      case 'fortitude':
        dados = vig[0].value;
        setBns(vig[0].fortitude_bonus);
        break;
      case 'furtividade':
        dados = agil[0].value;
        setBns(agil[0].stealth_bonus);
        break;
      case 'iniciativa':
        dados = agil[0].value;
        setBns(agil[0].iniciative_bonus);
        break;
      case 'intimidacao':
        dados = pres[0].value;
        setBns(pres[0].intimidation_bonus);
        break;
      case 'intuicao':
        dados = pres[0].value;
        setBns(pres[0].intuition_bonus);
        break;
      case 'investigacao':
        dados = intel[0].value;
        setBns(intel[0].investigation_bonus);
        break;
      case 'luta':
        dados = strengths[0].value;
        setBns(strengths[0].fighting_bonus);
        break;
      case 'medicina':
        dados = intel[0].value;
        setBns(intel[0].medicine_bonus);
        break;
      case 'percepcao':
        dados = pres[0].value;
        setBns(pres[0].sight_bonus);
        break;
      case 'pilotagem':
        dados = agil[0].value;
        setBns(agil[0].driving_bonus);
        break;
      case 'pontaria':
        dados = agil[0].value;
        setBns(agil[0].aiming_bonus);
        break;
      case 'profissao':
        dados = intel[0].value;
        setBns(intel[0].profession_bonus);
        break;
      case 'reflexos':
        dados = agil[0].value;
        setBns(agil[0].reflexes_bonus);
        break;
      case 'religiao':
        dados = pres[0].value;
        setBns(pres[0].religion_bonus);
        break;
      case 'sobrevivencia':
        dados = intel[0].value;
        setBns(intel[0].survival_bonus);
        break;
      case 'tatica':
        dados = intel[0].value;
        setBns(intel[0].tactics_bonus);
        break;
      case 'tecnologia':
        dados = intel[0].value;
        setBns(intel[0].tech_bonus);
        break;
      case 'vontade':
        dados = pres[0].value;
        setBns(pres[0].will_bonus);
        break;
      default:
        dados = 1;
        break;
    }
  };

  const getRandomInt = (min, max, dd, e) => {
    e.preventDefault();
    if (!dd) dd = agil[0].value;
    for (let index = 0; index < dd; index += 1) {
      // alert('oi');
      min = Math.ceil(min);
      max = Math.floor(max);
      if (dd - index === 1) {
        nums.push(`${Math.floor(Math.random() * (max - min) + min)} `);
        return setResult(nums);
      }
      nums.push(`${Math.floor(Math.random() * (max - min) + min)}, `);
      setResult(nums);
    }
  };

  const handleClose = () => {
    isRolling = false;
  };

  if (!isRolling) return <></>;

  if (isLoading) {
    return (
      <Container>
        <section>
          <p>Carregando...</p>
        </section>
      </Container>
    );
  }

  if (
    !strengths.length
    && !intel.length
    && !pres.length
    && !vig.length
    && !agil.length
  ) {
    return (
      <Container>
        <section>
          <p>Carregando...</p>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section>
        <form onSubmit={(e) => getRandomInt(1, 21, dados, e)}>
          <label htmlFor="pericias">
            Perícia:
            <select
              name="pericias"
              onChange={(e) => setPericia(e.target.value)}
              onBlur={handleFill}
              id="pericias"
            >
              <option value="acrobacia">Acrobacia</option>
              <option value="adestramento">Adestramento</option>
              <option value="atletismo">Atletismo</option>
              <option value="ciencias">Ciências</option>
              <option value="crime">Crime</option>
              <option value="diplomacia">Diplomacia</option>
              <option value="enganacao">Enganação</option>
              <option value="fortitude">Fortitude</option>
              <option value="furtividade">Furtividade</option>
              <option value="iniciativa">Iniciativa</option>
              <option value="intimidacao">Intimidação</option>
              <option value="intuicao">Intuição</option>
              <option value="investigacao">Investigação</option>
              <option value="luta">Luta</option>
              <option value="medicina">Medicina</option>
              <option value="percepcao">Percepção</option>
              <option value="pilotagem">Pilotagem</option>
              <option value="pontaria">Pontaria</option>
              <option value="profissao">Profissão</option>
              <option value="reflexos">Reflexos</option>
              <option value="religiao">Religião</option>
              <option value="sobrevivencia">Sobrevivência</option>
              <option value="tatica">Tática</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="vontade">Vontade</option>
            </select>
          </label>
          <label htmlFor="dt">
            DT:
            <input type="number" value={dt} id="dt" />
          </label>
          <button type="submit">Rolar dados</button>
          <p>
            Resultados:
            {' '}
            [
            {result}
            ]
            {' '}
            +
            {' '}
            {bns}
          </p>
        </form>
      </section>
    </Container>
  );
}

Rolagem.defaultProps = {
  isRolling: false,
};

Rolagem.propTypes = {
  isRolling: PropTypes.bool,
};
