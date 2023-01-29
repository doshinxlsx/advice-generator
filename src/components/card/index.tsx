import React, { useEffect, useState } from 'react';
import ButtonIcon from './components/buttonIcon';
import Divider from './components/divider';
import axios from 'axios';
import { AdviceNumber, DiceButton, CardContainer, Message, DividerContainer } from './styles';
import { IData } from '../../types';

const Card = () => {
  const [data, setData] = useState<IData>({
    id: 1,
    advice: '',
  });

  const generateAdvice = async () => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      setData(res.data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateAdvice();
  }, []);

  const handleClick = () => {
    generateAdvice();
  };

  return (
    <CardContainer>
      <AdviceNumber>Advice #{data.id}</AdviceNumber>
      <Message>{data.advice}</Message>

      <DividerContainer>
        <Divider />
      </DividerContainer>

      <DiceButton onClick={handleClick}>
        <ButtonIcon />
      </DiceButton>
    </CardContainer>
  );
};

export default Card;
