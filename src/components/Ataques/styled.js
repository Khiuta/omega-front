import styled from 'styled-components';
import { darkColor } from '../../config/colors';

export const Ataq = styled.div`
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

  main {
    display: flex;
    flex: 1 1 100%;
    flex-wrap: wrap;
    gap: 10px;
  }

  div {
    display: flex;
    flex: 1 1 100%;
    gap: 2%;
    font-size: 14px;
  }

  .nome-atq {
    display: flex;
    flex-direction: column;
    width: 32%;

    #nome-atq {
      width: 100%;
      border: none;
      border: 1px solid #fff;
      color: #fff;
      background: #000;
      border-radius: 5px;
      height: 35px;
      font-size: 14px;
      padding-left: 3px;
    }
  }

  .test-atq {
    display: flex;
    flex-direction: column;
    width: 15%;

    #test-atq {
      width: 100%;
      border: none;
      border: 1px solid #fff;
      color: #fff;
      background: #000;
      border-radius: 5px;
      height: 35px;
      font-size: 12px;
      padding-left: 3px;
    }
  }

  .dmg-atq {
    display: flex;
    flex-direction: column;
    width: 15%;

    #dmg-atq {
      width: 100%;
      border: none;
      border: 1px solid #fff;
      color: #fff;
      background: #000;
      border-radius: 5px;
      height: 35px;
      font-size: 12px;
      padding-left: 3px;
    }
  }

  .outros-atq {
    display: flex;
    flex-direction: column;
    width: 32%;

    #outros-atq {
      width: 100%;
      border: none;
      border: 1px solid #fff;
      color: #fff;
      background: #000;
      border-radius: 5px;
      height: 35px;
      font-size: 14px;
      padding-left: 3px;
    }
  }

  .adicionar {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
  }
`;
