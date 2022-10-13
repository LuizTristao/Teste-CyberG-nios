import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Nav, A, Login, Ul, Li } from "./styled";

const HeaderComponent : React.FunctionComponent = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const navLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  }

  const renderClasses = () => {
    let classes = "links";

    if (navLinkOpen) {
      classes += " active"
    }
  return classes
  }
	return (
    <>
      <Nav>
        <Icon
          icon="codicon:three-bars"
          onClick={navLinksToggle}
          style={{fontSize: '40px', color:'#FFFFFF',cursor: 'pointer'}}
        />
        <div>
        <Icon
          icon="simple-icons:ford"
          style={{fontSize: '40px', color:'#FFFFFF',marginLeft:'70px'}}
        />
      <Ul className={renderClasses()}>
        <Li className="link">
          <A href="#">Home</A>
        </Li>
        <Li className="link">
          <A href="#">Sobre</A>
        </Li>
        <Li className="link">
          <A href="#">Tabela</A>
        </Li>
        <Li className="link">
          <A href="#">Fale conosco</A>
        </Li>
        <Login className="login">
          <Li className="link">
            <A href="#">Entrar</A>
          </Li>
          <Icon icon="charm:person" style={{fontSize: '23px', color:'#FFFFFF',
          marginLeft:'70px'}}/>
        </Login>
    </Ul>
    </div>
      </Nav>
      </>
    )
}

export default HeaderComponent
