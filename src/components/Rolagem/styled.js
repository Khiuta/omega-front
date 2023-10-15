import styled from 'styled-components';
import { darkColor, darkerColor } from '../../config/colors';

export const Container = styled.div`
  display: flex;
  // position: absolute;
  justify-content: center;
  align-items: center;
  // z-index: 10;
  width: 100%;
  // height: 100vh;
  background-color: rgba(0, 0, 0, .8);

  section {
    background: ${darkColor};
    display: flex;
    flex: 1 1 90%;
    max-width: 90%;
    height: 35%;
    padding: 20px;
    gap: 10px;
    flex-wrap: wrap;

    select {
      color: #fff;
      background: #000;
      border-radius: 5px;
    }

    label {
      display: flex;
      gap: 10px;
      margin-top: 10px
    }

    #dt {
      border: none;
      border-bottom: 1px solid #fff;
      background: ${darkColor};
      height: 20px;
      width: 30px;
    }

    button {
      margin-top: 10px;
      border: none;
      border: 1px solid #fff;
      background: #000;
      color: #fff;
      font-family: 'Inter';
      border-radius: 5px;
      padding: 5px;
      font-size: 15px;
    }

    p {
      margin-top: 10px;
    }
  }
`;
