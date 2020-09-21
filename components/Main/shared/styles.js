import styled, { css } from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.background_image});
  background-repeat: no-repeat;
  background-size: 15rem 15rem;
  
  @media (max-width: 1200px) {
    background-size: 10rem 10rem;
  }
  @media (max-width: 991px) {
    background-size: 8rem 8rem;
  }
  @media (max-width: 480px) {
    background-size: 5rem 5rem;
  }
`;
export const Content = styled.div`
  max-width: 100vw;
  width: 98vw;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 1rem 6rem 0 6rem;


  img.aside-image {
    width: ${(props) => props.asideimagesizes.normal_width}rem;
    height: ${(props) => props.asideimagesizes.normal_height}rem;
  }
  @media (max-width: 1200px) {
    img.aside-image {
      width: ${(props) => props.asideimagesizes.medium_width}rem;
      height: ${(props) => props.asideimagesizes.medium_height}rem;
      align-self: center;
    }
  }
  @media (max-width: 991px) {
    flex-direction: column;
    ${(props) => props.reverse && css` flex-direction: column-reverse;`};
  ${(props) => !props.reverse && css` flex-direction: column;`};
  padding: 1rem 4rem 0 4rem;
    background-size: 8rem 8rem;
  }
  @media (max-width: 480px) {
    padding: 1rem 2rem 0 2rem;
    background-size: 5rem 5rem;
    img.aside-image {
      width: ${(props) => props.asideimagesizes.small_width}rem;
      height: ${(props) => props.asideimagesizes.small_height}rem;
      align-self: center;
    }
  }
`;
export const Aside = styled.aside`
  justify-content: center;
  padding: 2.6rem 3.2rem;
  margin: auto 0;
  h3 {
    font-size: 27px;
    font-weight: 400;
  }
  h1 {
    font-size: 3.2rem;
    font-family: "Montserrat", sans-serif;
    color: var(--title-color);
    font-weight: 800;
  }
  p {
    line-height: 1.5;
    margin: 20px 0;
    font-weight: 300;
  }
  @media (max-width: 991px) {
    text-align: center;
    padding: 2.6rem 0;
  }
  @media (max-width: 580px) {
    h3 {
      font-size: 20px;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;
