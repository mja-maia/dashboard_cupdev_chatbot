import React from "react";
import Menu from "../../components/menu";
import Header from "../../components/header";
import Card from "../../components/card";

import { Container, Wrapper, Content } from "./styles";

const Dashboard = () => (
  <Container>
    <Menu />
    <Wrapper>
      <Header />
      <Content>
        <Card height="200px" width="400px">
          <h3>Conteudo do Card</h3>
        </Card>
      </Content>
    </Wrapper>
  </Container>
);

export default Dashboard;
