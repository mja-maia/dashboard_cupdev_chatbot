import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  padding: 16px 32px 0 32px;

  display: flex;
`;

export const PageTitle = styled.p`
  color: #494949;
  font-weight: 500;

  text-transform: capitalize;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
