import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Container = styled.div`
//   min-height: 692px;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 0;
//   overflow: hidden;
//   background: linear-gradient(
//     108deg,
//     rgba(1, 147, 86, 1) 0%,
//     rgba(10, 201, 122, 1) 100%
//   );
// `;

export const Container = styled.div`
  background-color: #4b59f7;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FormWrap = styled.div`
  background-color: #101522;
  border-radius: 3px;
  height: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* padding-top: 20px;
  padding-bottom: 20px; */

  @media screen and (max-width: 480px) {
    height: 80%;
    width: 320px;
  }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 5px 5px 5px 5px; */

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #101522;
  max-width: 400px;
  height: auto;
  width: 80%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 70px 22px;
  border-radius: 4px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); */

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 380;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #4b59f7;
  margin-top: 8px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
