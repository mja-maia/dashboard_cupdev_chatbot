import styled from "styled-components";

export const Container = styled.div`
  width: 56px;
  height: 100%;
  background-color: #fff;
  /* background-color: #d1cfcf; */
  border-right: 1px solid #eae8e8;
  color: #fff;
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const MenuList = styled.ul`
  margin-top: 36px;
  height: 100%;
  border-top: 1px solid #afafaf;
  overflow: hidden;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  /* background-color: #21cb71; */
  /* background-color: #adadad; */
  padding: 5px 0;
  border-radius: 3px;
  cursor: pointer;

  :not(:first-child):not(:last-child) {
    margin-top: 16px;
  }

  :last-child {
    margin-top: auto;
  }
`;
