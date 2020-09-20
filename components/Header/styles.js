import styled, { css } from "styled-components";

export const Head = styled.header`
  width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 20px 100px;
  background: var(--background);
  position: fixed;
  justify-content: center;
  
  ${(props) =>
    props.justMove &&
    css`
      background: var(--color-white);
      box-shadow: 10px 10px 20px #f1f1f1;
      padding: 10px 100px;
    `}

  @media (max-width: 1048px) {
    flex-direction: column;
    padding: 20px 80px;
    background: var(--color-white);
    box-shadow: 10px 10px 20px #f1f1f1;
    padding: 10px 100px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 10px 20px;
  }
  @media (max-width: 380px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

export const Menu = styled.div`
  align-self: center;
  padding: 8px;

  img {
    height: 30px;
    cursor: pointer;
  }
  label {
    display: none;
  }
  ${(props) =>
    props.justMove &&
    css`
      img {
        padding-top: 5px;
        cursor: pointer;
      }
    `}

  @media (max-width: 1048px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    label {
      display: block;
    }
    img {
      padding-top: 5px;
      cursor: pointer;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  list-style: none;
  flex-grow: 1;
  justify-content: center;

  input {
    display: none;
  }
  #toggle:checked ~ li,
  #toggle:checked ~ button {
    display: block;
  }
  li {
    padding: 10px 1.2rem;
  }

  li a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-color);
    cursor: pointer;
    transition: 0.5s all;
  }

  li a:hover {
    color: var(--text-active-color);
  }
  button {
    margin-left: 1rem;
  }
  @media (max-width: 1048px) {
    flex-direction: column;
    text-align: center;

    li,
    button {
      display: none;
    }
    li {
      padding: 5px 0;
    }
    button {
      width: 150px;
      justify-self: center;
      align-self: center;
      outline: none;
     
    }
  }
`;
