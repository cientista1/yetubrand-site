import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  padding: 4rem 4rem;
  justify-items:center;
  gap: 40px 20px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2,6fr);
   
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
    margin-top: -4rem;
   
  }
`;

export const Block = styled.article`
  max-width: 250px;
  text-align: center;
  position: relative;
  img{
    height: 80px;
  }
  p{
    font-weight: 300;
    font-size: 16px;
    text-align: center;
  }
  
`

export const Title = styled.h4`
  color: var(--title-color);
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  padding: 8px 0;
`