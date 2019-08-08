import React, { useState } from "react";
import { Container, FormWrapper, Form, FormGroup } from "./styles";

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
          <FormGroup>
            <label>Email:</label>
            <input
              type="text"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Digite aqui seu email"
            />
          </FormGroup>
          <FormGroup>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
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
