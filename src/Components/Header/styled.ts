import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 4rem;
  width: 100%;
  align-items: center;
  background-color: transparent;
  transition: all 0.6s ease-in-out;
  transform: translate(100%)

  & > svg {
    display: none;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  @media(max-width: 700px){
    justify-content: flex-start;

    & > svg {
      display: flex;
    }

    & > div {
      display:none;
    }

    .active {
  transform: translateX(0%)
}
  }

`;

const A = styled.a`
  text-decoration: none;
  margin-left: 4px;
  font-size: 20px;
  font-weight: bolder;
  color: #D3D3D3;
  &:hover{color: #FFFFFF}
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 80%;
`;

const Li = styled.li`
  text-decoration: none;
`;

const Login = styled.div`
  display: flex;
`;

const Logo = styled.div`
  font-size: 24px;
`;

export {Nav,A,Login,Logo,Ul,Li}

