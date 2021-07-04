import { Link } from "gatsby";

import React, { useState, FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
const HeaderContent = styled.header`
  background: #ffffff;
  height: 3.2em;
  display: flex;
  align-content: center;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.4);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin-left: auto;
  margin-right: auto;

  #nav-toggle {
    position: absolute;
  }
`;

const NavbarBrand = styled.span`
  font-size: 1.25rem;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h5`
  color: #fff;
  background-color: #212529;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  margin: 0;
  font-weight: 400;
  font-family: Consolas;
  line-height: 21px;
  font-size: 18px;
`;
const NavbarButton = styled.span`
  font-family: Segoe UI;
  font-weight: 700;
  color: #343a40;
  padding: 6px 10px;
  &:hover {
    cursor: pointer;
    color: black;
  }

  @media screen and (min-width: 992px) {
    color: black;
  }
`;
const BurgerButton = styled(NavbarButton)`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
  font-size: 28px;
`;

type Props = {
  siteTitle: string;
}

const Header: FC<Props> = ({siteTitle}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContent>
        <Nav>
          <NavbarBrand>
            <Link style={{ textDecoration: "none" }} to="/">
              <kbd>
                <Title>{siteTitle}</Title>
              </kbd>
            </Link>
          </NavbarBrand>
          <Navbar open={open} />
          <BurgerButton onClick={() => setOpen(!open)}>
            <FontAwesomeIcon className="github-icon" icon={faBars} />
          </BurgerButton>
        </Nav>
      </HeaderContent>
    </>
  );
};

export default Header;
