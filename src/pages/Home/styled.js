import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  flex: 1 1 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;

export const Info = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  gap: 30px;

  .icon {
    height: 100%;
    width: 30%;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #personagem,
  #jogador {
    display: flex;
    text-align: center;
    font-size: 24px;
    font-family: 'Inter';
    font-style: italic;
    border: none;
    background: #000;
    border: 1px solid #fff;
    width: 85%;
    height: 40px;
    border-radius: 10px;
    color: #fff;
  }
`;
