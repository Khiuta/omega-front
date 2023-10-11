import styled from 'styled-components';
import { darkColor } from '../../config/colors';

export const Habi = styled.div`
  display: flex;
  flex: 1 1 90%;
  width: 90%;
  flex-wrap: wrap;

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
  }

  .nome-hab {
    display: flex;
    flex: 1 1 65%;
    flex-direction: column;

    #nome-hab {
      width: 100%;
      border: none;
      border: 1px solid #fff;
      background: #000;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;
      height: 35px;
      padding-left: 3px;
    }
  }

  .custo-hab {
    display: flex;
    flex: 1 1 20%;
    flex-direction: column;

    #custo-hab {
      width: 100%;
      border: none;
      border: 1px solid #fff;
      background: #000;
      color: #fff;
      border-radius: 5px;
      height: 35px;
      font-size: 14px;
      padding-left: 3px;
    }
  }

  .icon {
    display: flex;
    align-items: flex-end;
    padding-bottom: 8px;
    justify-content: center;
    flex: 1 1 15%;
  }

  .adicionar {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
  }
`;
