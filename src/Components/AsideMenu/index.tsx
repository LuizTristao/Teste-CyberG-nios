import { Icon } from "@iconify/react"
import { A, Li, Nav, Ul } from "./styled"

const AsideMenu : React.FC = () => {
  return (
    <>
      <Nav>
        <Icon
          icon="simple-icons:ford"
          style={{fontSize: '90px', color:'#000000'}}
        />
      <Ul className="links">
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
    </Ul>
      </Nav>
    </>
  )
}

export {AsideMenu}
