import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faOpencart } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"
import React, { useState } from "react"

const NavbarContainer = styled.ul<{ open: boolean }>`
  color: black;
  font-weight: w600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.6em;
  @media screen and (max-width: 992px) {
    position: fixed;
    align-item: flex-start;
    margin-top: 0;
    padding: 1em;
    z-index: 9;
    left: -27px;
    right: 0;
    top: 3.2em;
    bottom: 0;
    width: auto;
    flex-direction: column;
    display: ${props => (props.open ? "block;" : "none;")};
    background-color: #fff;
    height: 7em;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    .github-icon {
      display: none;
    }
  }
`

const NavbarItem = styled.li`
  list-style: none;
  margin-right: 0.3rem;
  display: flex;

  width: 100%;
  height: 2em;
  display: block;

  @media screen and (max-width: 992px) {
    a {
      color: black;
    }
  }
`

const NavbarButton = styled.span`
  font-family: Segoe UI;
  font-weight: 700;
  padding: 6px 10px;
  &:hover {
    cursor: pointer;
    color: black;
  }
  a {
    color: black;
  }

  @media screen and (min-width: 992px) {
    color: black;
  }
`

const NominateButton = styled(NavbarButton)`
  margin-top: 2em;
  color: #343a40;
  background-color: #343a40;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`

const Navbar = ({ open }) => {
  return (
    <NavbarContainer open={open}>
      <NavbarItem>
        <NavbarButton>
          <a
            target="_blank"
            style={{ textDecoration: "none" }}
            href="https://github.com/DevsDO/whocode-frontend"
          >
            <FontAwesomeIcon icon={faGithub} /> About
          </a>
        </NavbarButton>
      </NavbarItem>
      <NavbarItem>
        <NominateButton>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Nominate
          </Link>
        </NominateButton>
      </NavbarItem>
    </NavbarContainer>
  )
}
Navbar.propTypes = {
  open: PropTypes.bool,
}
export default Navbar
