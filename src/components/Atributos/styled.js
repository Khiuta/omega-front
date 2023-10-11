import styled from 'styled-components';
import { darkColor } from '../../config/colors';

export const Att = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 90%;
  width: 90%;
  align-items: center;
  justify-content: center;
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
    justify-content: space-between;
  }

  label {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  input {
    border: none;
    border: 1px solid #fff;
    background-color: #000;
    height: 50px;
    width: 80%;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    font-size: 30px;
  }
`;
