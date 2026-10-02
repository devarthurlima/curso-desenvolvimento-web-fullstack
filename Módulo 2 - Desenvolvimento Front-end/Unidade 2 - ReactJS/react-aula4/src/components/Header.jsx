import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: blueviolet;
  padding: 0px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  & h1 {
    color: white;
  }
  & nav ul {
    display: flex;
    gap: 36px;
    list-style: none;
  }
  & li a {
    color: #ffffff80;
    font-size: 18px;
    text-decoration: none;
    &:hover,
    &.active {
      color: #ffffff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/produtos">Produtos</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
