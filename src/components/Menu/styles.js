import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 60px;
  padding-left: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media  (max-width: 680px) {
    height: 60px;
    width: 100%;
    flex-direction: row;
    padding: 0px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.actived ? '#4B6AEC' : '#676767')} ;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;

  svg{
    color: ${(props) => (props.actived ? '#4B6AEC' : '#676767')} ;
  }

  @media  (max-width: 680px) {
    margin: 0;
    padding: 0 16px;
  }
`;
