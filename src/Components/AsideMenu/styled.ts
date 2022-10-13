import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #FFFFFF;
  transition: all 0.6s ease-in-out;
  padding-left: 1rem;
  width: 60%;
  height: 30rem;
  border-radius: 0rem 1rem 1rem 0rem;
  box-shadow: 0.2rem 0rem 0.8rem rgba(0, 0, 0, 0.15);;
`;

const A = styled.a`
  text-decoration: none;
  margin-left: 4px;
  font-weight: bolder;
  color: #000000;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  justify-content: space-around;
`;

const Li = styled.li`
  text-decoration: none;
  margin-bottom: 1.2rem;
  font-size: 1.4rem;

`;


export {Nav,A,Ul,Li}

