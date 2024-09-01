import { Link } from "react-router-dom"
import HeaderMenuWrapper from "./style"

const HeaderMenu = () => {
  return (
    <HeaderMenuWrapper>
      <h1>Valorant API</h1>

      <nav>
        <ul>
          <li><Link to="/">Agentes</Link></li>
        </ul>
      </nav>
    </HeaderMenuWrapper>
  )
}

export default HeaderMenu