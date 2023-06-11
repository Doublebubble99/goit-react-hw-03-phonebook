import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding-bottom: 10px;
  font-size: 18px;
  line-height: calc(22 / 18);
  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 20px;
    font-size: 30px;
    line-height: calc(34 / 30);
  }
`;
export const Input = styled.input`
  width: 200px;
  border-radius: 4px;
  border: 1px solid red;
  height: 25px;
  outline: none;
  :focus {
    border: 1px solid green;
    background-color: aliceblue;
    box-shadow: 0 0 6px 0 orange;
  }
  @media screen and (min-width: 768px) {
    height: 35px;
    font-size: 24px;
    line-height: calc(28 / 24);
    width: 450px;
  }
  @media screen and (min-width: 1200px) {
    height: 40px;
    font-size: 28px;
    line-height: calc(32 / 28);
    width: 750px;
  }
`;
