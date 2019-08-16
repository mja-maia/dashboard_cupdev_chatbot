import React from "react";
import { Container } from "./styles";

const Card = props => (
  <Container width={props.width} height={props.height}>
    {props.children}
  </Container>
);

export default Card;
