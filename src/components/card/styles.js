import styled from "styled-components";

export const Container = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: #fff;
  border-radius: 5px;
  padding: 8px;
  -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.22);
`;
