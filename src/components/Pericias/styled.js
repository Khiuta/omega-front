import styled from 'styled-components';
import { darkColor, darkerColor } from '../../config/colors';

export const Peri = styled.div`
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
      font-size: 20px;
      font-family: 'Inter';
      font-style: italic;
    }
  }

  strong {
    font-size: 14px;
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
    flex-wrap: wrap;
  }

  .ident {
    display: flex;
    flex: 1 1 100%;

    #ident-maior {
      display: flex;
      flex: 1 1 26%;
      font-weight: bold;
      text-align: center;
    }

    #ident-menor {
      display: flex;
      flex: 1 1 17%;
      font-weight: bold;
      text-align: center;
    }
  }

  .pericias {
    display: flex;
    flex: 1 1 100%;
    gap: 4%;
    text-overflow: ellipsis '...';

    #nome {
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 26%;
      display: block;
      overflow: hidden
    }
  }

  #dados,
  #treino,
  #bonus,
  #outros {
    width: 14%;
    border: none;
    border-bottom: 1px solid #fff;
    background: #000;
    color: #fff;
    text-align: center;
    font-size: 18px;
    padding-bottom: 0px;
  }
`;
