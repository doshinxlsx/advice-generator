import React, { useState } from 'react';
import ButtonIcon from './components/buttonIcon';
import Divider from './components/divider';
import { AdviceNumber, DiceButton, CardContainer, Message, DividerContainer } from './styles';

const Card = () => {
  return (
    <CardContainer>
      <AdviceNumber>Advice #117</AdviceNumber>
      <Message>
        "It is easy to sit up and take notice, what's difficult is getting up and taking action."
      </Message>

      <DividerContainer>
        <Divider />
      </DividerContainer>

      <DiceButton>
        <ButtonIcon />
      </DiceButton>
    </CardContainer>
  );
};

export default Card;
