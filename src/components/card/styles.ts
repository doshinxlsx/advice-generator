import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #313a49;
  border-radius: 15px;
  max-width: 80%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 400px;
    align-items: center;
  }
`;

export const AdviceNumber = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  color: #60e3a9;
  margin: 30px 0 0 0;
`;

export const Message = styled.p`
  color: #d2dfeb;
  font-weight: 600;
  font-size: 18px;
  margin: 30px;
  text-align: center;
`;

export const DividerContainer = styled.div`
  margin: 0 30px 30px 30px;
`;

export const DiceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #60e3a9;
  border: none;
  padding: 5px;
  position: absolute;
  bottom: -15px;
  transition: 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(96, 227, 169) 0px 0 35px 3px;
  }
`;
