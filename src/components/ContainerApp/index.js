import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:row;

  @media  (max-width: 680px) {
    flex-direction:column;
  
  }
`;
