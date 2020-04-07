import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  margin: 0 auto;
  
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  
  color: #676767;

  strong{
    color: #4B6AEC;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;

  a{
    height: 38px;
    width: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    
    font-size: 21px;
    background: #4B6AEC;
    border-radius: 4px;

    svg{
      color: #fff;
    }

    
  }

`;
