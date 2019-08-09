import React, { useState } from "react";
import logo from "./../../assets/logo.png";

import { Container, FormWrapper, Form, FormGroup, Logo } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = e => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={submitForm}>
          <Logo src={logo} />
          <FormGroup>
            <input
              type="text"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="password"
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>
          <FormGroup>
            <button type="submit">Login</button>
          </FormGroup>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
