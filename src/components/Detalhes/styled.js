import styled from 'styled-components';
import { darkColor } from '../../config/colors';

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 90%;
  width: 90%;
  gap: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${darkColor};
    border-radius: 5px;
    padding: 5px 0px 5px 0px;
    width: 100%;

    p {
      font-size: 20px;
      font-family: 'Inter';
      font-style: italic;
    }
  }

  // #region origem e classe
  .origem-classe {
    display: flex;
    flex: 1 1 100%;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  label {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
  }

  #origem,
  #classe {
    border: none;
    border: 1px solid #fff;
    width: 100%;
    height: 25px;
    border-radius: 5px;
    background: #000;
    color: #fff;
    padding-left: 10px;
  }
  // #endregion origem e classe

  // #region nivel e deslocamento

  .nivel-desl {
    display: flex;
    flex: 1 1 45%;
    max-width: 45%;
    gap: 15%;
  }

  #nivel,
  #desl {
    height: 50px;
    width: 100%;
    color: #fff;
    font-size: 25px;
    text-align: center;
    border: none;
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  // #endregion nivel e deslocamento

  // #region pv

  .pv {
    display: flex;
    flex: 1 1 50%;
    max-width: 50%;
    justify-content: flex-end;
    padding-left: 10px;
    gap: 10%;
  }

  #pv-max,
  #pv-atual {
    height: 50px;
    width: 90%;
    color: #fff;
    font-size: 25px;
    text-align: center;
    border: none;
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  // #endregion pv

  // #region sanidade

  .sanidade{
    display: flex;
    flex: 1 1 45%;
    max-width: 45%;
    gap: 15%;
  }

  #san-max,
  #san-atual {
    height: 50px;
    width: 100%;
    color: #fff;
    font-size: 25px;
    text-align: center;
    border: none;
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  // #endregion sanidade

  // #region pe

  .pe {
    display: flex;
    flex: 1 1 50%;
    max-width: 50%;
    justify-content: flex-end;
    padding-left: 10px;
    gap: 10%;
    padding-top: 20px;
  }

  #pe-max,
  #pe-atual {
    height: 50px;
    width: 90%;
    color: #fff;
    font-size: 25px;
    text-align: center;
    border: none;
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  // #endregion pe

  // #region defesa

  .defesa {
    display: flex;
    flex: 1 1 45%;
    max-width: 45%;
    gap: 15%;
  }

  #def {
    height: 100px;
    width: 100%;
    color: #fff;
    font-size: 55px;
    text-align: center;
    border: none;
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  // #endregion defesa

  // #region equipamentos

  .equip {
    display: flex;
    flex: 1 1 45%;
    max-width: 45%;
    gap: 15%;
  }

  #equip,
  #outros {
    height: 50px;
    width: 100%;
    color: #fff;
    font-size: 25px;
    text-align: center;
    border: none;
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  // #endregion equipamentos

  // #region proteção

  .protecao {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 50%;
    max-width: 50%;
    justify-content: flex-end;
    padding-left: 10px;
    gap: 10%;
  }

  #protec {
    height: 30px;
    width: 100%;
    color: #fff;
    font-size: 18px;
    text-align: center;
    border: none;
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  #resist {
    height: 45px;
    width: 100%;
    color: #fff;
    font-size: 18px;
    text-align: center;
    border: none;
    font-family: 'Inter';
    border: 1px solid #fff;
    background: #000;
    border-radius: 5px;
  }

  // #endregion proteção
`;
