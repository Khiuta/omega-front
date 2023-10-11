import styled from 'styled-components';
import { lightColor } from '../../config/colors';

export const Icon = styled.header`
  display: flex;
  flex: 1 1 100%;
  height: 25%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  .icon {
    height: 100%;
    width: 30%;
  }
`;

export const Content = styled.main`
  display: flex;
  flex: 1 1 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 30%;

  form {
    display: flex;
    flex-direction: column;
    flex: 1 1 90%;
    max-width: 95%;
    gap: 25px;
    background-color: ${lightColor};
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 20% 5px 10px 5px;

    label {
      display: flex;
      flex-direction: column;
      font-size: 20px;

      p {
        padding-left: 10px;
      }
    }

    input {
      background-color: #000;
      border: 1px solid #fff;
      border-radius: 10px;
      height: 30px;
      font-family: 'Inter';
      color: #fff;
      font-size: 20px;
      padding-left: 15px;
    }

    footer {
      display: flex;
      flex: 1 1 100%;
      justify-content: flex-end;

      button {
        height: 30px;
        width: 80px;
        font-family: 'Inter';
        font-size: 20px;
        color: #fff;
        background-color: #000;
        border: none;
        border: 1px solid #fff;
        border-radius: 10px;
      }
    }
  }
`;
