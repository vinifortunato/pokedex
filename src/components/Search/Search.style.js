import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled.input`
  background-color: #F2F2F2;
  border-radius: 10px;
  color: #747476;
  display: flex;
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin: 0px 10px;
  padding: 20px 10px;

  @media (max-width: 752px) {
    text-align: center;
  }
`;
