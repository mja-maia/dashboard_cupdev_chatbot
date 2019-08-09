import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #21cb71;
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
`;

export const Form = styled.form`
  height: 500px;
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;

  input {
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
  }

  button {
    height: 35px;
    border: none;
    background-color: #3b8ff6;
    color: #fff;
    font-size: 18px;
  }

  button:hover {
    background-color: #3079d4;
  }
`;
