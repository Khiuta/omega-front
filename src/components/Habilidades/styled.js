import styled from 'styled-components';
import { darkColor, darkerColor } from '../../config/colors';

export const Habi = styled.div`
  display: flex;
  flex: 1 1 90%;
  width: 90%;
  flex-wrap: wrap;
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
      display: flex;
      flex: 1 1 75%;
      max-width: 90%;
      justify-content: center;
      padding-left: 30px;
      font-size: 20px;
      font-family: 'Inter';
      font-style: italic;
    }

    .save {
      padding-right: 5px;
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
    flex-wrap: wrap;

    span {
      margin-top: 10px;
      width: 100%;
      height: 2px;
      background: #fff;
      border: 1px solid #fff;
    }
  }

  ::placeholder {
    color: #fff;
  }

  .nome-hab {
    display: flex;
    flex: 1 1 75%;
    max-width: 75%;
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
    max-width: 20%;
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

  .desc-hab {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    padding-top: 10px;

    #desc-hab {
      width: 100%;
      border: none;
      border: 1px solid #fff;
      background: #000;
      color: #fff;
      border-radius: 5px;
      height: 50px;
      font-size: 14px;
      font-family: 'Inter';
      padding: 0px 3px 3px 3px;
    }
  }


  .adicionar {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
  }
`;
