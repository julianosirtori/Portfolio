import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1182px;
  margin: 0 auto;

  h1{
    margin-top: 64px;
    font-weight: bold;
    font-size: 64px;
    color: #4B6AEC;
    text-align: center;
    margin-bottom: 32px;

    @media  (max-width: 1120px) {
      font-size: 48px;
      margin-top: 32px;
    }

    @media  (max-width: 680px) {
      font-size: 32px;
      margin-top: 16px;
    }
  }

`;

export const Content = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  form{
    display: flex;
    flex-direction: column;
    max-width: 560px;
    width: 100%;

    label{
      font-size: 16px;
      line-height: 21px;
      color: #414141;
      margin-bottom: 4px;
    }

    input{
      width: 100%;
      color: #414141;
      font-weight: normal;
      font-size: 16px;
      padding: 6px 12px;
      background: #FFFFFF;
      border: 1px solid #C4C4C4;
      border-radius: 2px;
      margin-bottom: 16px;
    }

    textarea{
      width: 100%;
      color: #414141;
      font-weight: normal;
      font-size: 16px;
      padding: 6px 12px;
      background: #FFFFFF;
      border: 1px solid #C4C4C4;
      border-radius: 2px;
      margin-bottom: 16px;
    }

    button{

      font-size: 18px;
      color:  #FFFFFF;
      background: #4B6AEC;
      border-radius: 4px;
      border: none;
      padding: 4px 8px;
    }
    
  }

  img{
    max-width: 560px;
    width: 100%;
  }

  @media  (max-width: 1120px) {
    flex-direction:column;
    padding: 0 32px;
  }
`;
