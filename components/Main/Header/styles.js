import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-top: 93px;
  padding: 5rem 6rem;
  justify-content: space-between;
  background-image: url("static/images/strategy-section-bg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom right;
  background-size: 15rem 15rem;

  img.left {
    width: 30rem;
    height: 30rem;
  }
  @media (max-width: 1200px) {
    img.left {
      width: 27rem;
      height: 27rem;
      align-self: center;
    }
    background-size: 10rem 10rem;

  }
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 2rem 6rem;
    background-size: 8rem 8rem;

  }
  @media (max-width: 480px) {
    padding: 2rem 2rem;
    background-size: 5rem 5rem;
    img.left {
      width: 20rem;
      height: 20rem;
      align-self: center;
    }
  }
`;
export const Aside = styled.aside`
  justify-content: center;
  padding: 2.6rem 3.2rem;

  h3 {
    font-size: 27px;
    font-weight: 400;
  }
  h1 {
    font-size: 3.5rem;
    font-family: "Montserrat", sans-serif;
    color: var(--title-color);
    font-weight: 800;
  }
  p {
    line-height: 1.5;
    margin: 20px 0;
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
