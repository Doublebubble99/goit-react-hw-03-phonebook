import styled from '@emotion/styled';
export const Container = styled.div`
  display: block;
  padding: 10px;
  background-color: #253454;
  border-radius: 12px;
  border: 2px dashed green;
  @media screen and (min-width: 768px) {
    padding: 15px;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px;
  }
`;
export const Title = styled.h2`
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  padding-bottom: 10px;
  font-size: 20px;
  line-height: calc(24 / 20);
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: calc(32 / 28);
  }
  @media screen and (min-width: 1200px) {
    font-size: 34px;
    line-height: calc(38 / 34);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 420px;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;
export const Label = styled.label`
  align-self: flex-start;
  padding-bottom: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);
  font-family: 'Roboto', sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
    line-height: calc(32 / 28);
  }
`;
export const Input = styled.input`
  width: 200px;
  border-radius: 4px;
  border: 1px solid red;
  height: 25px;
  outline: none;
  width: 100%;
  :focus {
    border: 1px solid green;
    background-color: aliceblue;
    box-shadow: 0 0 6px 0 orange;
  }
  @media screen and (min-width: 768px) {
    height: 35px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
  @media screen and (min-width: 1200px) {
    height: 40px;
    font-size: 28px;
    line-height: calc(32 / 28);
  }
`;
export const Button = styled.button`
  width: 100px;
  border-radius: 8px;
  margin-top: 10px;
  height: 25px;
  cursor: pointer;
  border: 1px solid brown;
  :active {
    transform: scale(0.9);
    border: 1px solid blue;
    background-color: black;
    color: white;
  }
  @media screen and (min-width: 768px) {
    margin-top: 25px;
    width: 150px;
    height: 35px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
  @media screen and (min-width: 1200px) {
    margin-top: 25px;
    width: 200px;
    height: 45px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`;
