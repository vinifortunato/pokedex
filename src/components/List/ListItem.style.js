import styled from 'styled-components';

export const Wrapper = styled.li`
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(139, 190, 138, 0.4);
  margin: 25px 10px 0px 10px;
  width: 334px;

  @media (max-width: 752px) {
    width: 100%;
    width: 300px;
  }
`;

export const Container = styled.div`
  background-color: #8BBE8A;
  background-image: url('/assets/images/list-item-pattern.svg');
  background-position: 36% 10%;
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 115px;
  padding: 20px;
  position: relative;
  width: 100%;
`;

export const Details = styled.div``;

export const Id = styled.p`
  color: #17171B;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;

export const Name = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Tags = styled.div`
  display: flex;
`;

export const Image = styled.img`
  bottom: 10px;
  height: 130px;
  position: absolute;
  right: 10px;
  width: 130px;
`;
