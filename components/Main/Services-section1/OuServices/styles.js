import styled, { css } from "styled-components";

export const Section = styled.section`
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  border-radius: 25px;
  padding: 15px 20px;
  position: relative;
  z-index: 1;
  
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;

  span{
    color: var(--button-text-color); 
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Paragraph = styled.div`
  height: 0px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  p {
    font-weight: 300;
    font-size: 14px;
    opacity: 0;
    margin: 25px 10px;
  }

  ${(props) =>
    props.visible &&
    css`
      height: 5rem;
      p {
        display: block;
        opacity: 0.5;
        transition: opacity 0.5s ease-in-out;
      }

      @media (max-width: 768px){
        height: 7rem;
        p{
          margin: 15px 10px 20px 10px;
        }
      }
    `};
  transition: 0.5s ease-in-out;
`;
