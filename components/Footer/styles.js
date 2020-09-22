import styled from "styled-components";

export const Container = styled.footer`
  background: var(--primary);
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Sections = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 4rem 2rem;
  gap: 25px;

  img {
    height: 6.5rem;
    margin-top: -1.79rem;
  }
  p {
    color: var(--color-white);
  }
  @media (max-width: 991px){
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem 0rem;
    column-gap: 10rem;
  }
  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    padding: 4rem 0rem;
    justify-items:self-end;
  }
`;

export const Section = styled.div`
  max-width: 250px;
  h1 {
    color: var(--color-white);
    padding-bottom: 10px;
  }

  p {
    padding-bottom: 10px;
  }
  i {
    font-size: 18px;
    color: var(--icon-color);
    margin-right: 10px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  i:hover {
    color: var(--color-white);
  }

  &.social-media {
    i {
      color: white;
      font-size: 26px;
      padding: 8px;
    }
    i:hover {
      color: var(--icon-color);
    }
  }
  @media (max-width: 991px){
    width: 300px;
  }
`;

export const Reserved = styled.div`
  color: var(--color-white);
  padding: 10px;
  
`;
