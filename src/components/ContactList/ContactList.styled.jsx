import styled from '@emotion/styled';
export const List = styled.ul`
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 20px;
  }
`;
export const Button = styled.button`
  height: 25px;
  border-radius: 8px;
  color: white;
  background-color: red;
  cursor: pointer;
  border: 1px solid black;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 75px;
  }
  @media screen and (min-width: 1200px) {
    height: 35px;
    width: 100px;
  }
`;
