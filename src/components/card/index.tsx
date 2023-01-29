import React from 'react';
import { AdviceNumber, Button, CardContainer, Message } from './styles';

const Card = () => (
  <CardContainer>
    <AdviceNumber>Advice #117</AdviceNumber>
    <Message>
      "It is easy to sit up and take notice, what's difficult is getting up and taking action."
    </Message>

    <Button>Dice</Button>
  </CardContainer>
);

export default Card;
