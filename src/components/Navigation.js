/* COMPONENT / Navigation: Logo, Searchbox, UserMenu */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { mediumDevice, webContentMaxWidth } from "config"
import { CSSTransition } from "react-transition-group"
import ResponsiveImg from "./ResponsiveImage"
import RDPLogo from "assets/img/rdp-logo.png"
import Text from "./Text"

const Row = styled.div`
  display: flex;
`

const Column = styled(Row)`
  display: flex;
  flex-direction: column;
`

const Container = styled(Row)`
  flex: 1;
  max-width: ${webContentMaxWidth}px;
  align-items: center;
`

const NavButtonContainer = styled(Row)`
  margin-left: auto;
  padding-left: 30px;
  flex-wrap: wrap;
  @media (max-width: ${mediumDevice}px) {
    display: none;
  }
`

const NavButton = styled.button`
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  /*  */
  font-size: 16px;
  margin-left: 5vmin;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  @media (max-width: ${mediumDevice}px) {
    margin: 0;
    margin: 20px 0;
  }
`

const LogoContainerLink = styled.a`
  display: flex;
  width: 100%;
  max-width: 200px;
  align-items: center;
  cursor: pointer;
`

const LogoImage = styled(Row)`
  width: 100%;
  height: 100%;
  max-width: 40px;
  max-height: 40px;
`

const HamburgerMenuContainer = styled(Row)`
  display: none;
  margin-left: auto;
  @media (max-width: ${mediumDevice}px) {
    display: flex;
  }
`

const MenuContainer = styled.div`
  background-color: #fafafa;
  padding: 15px;
  flex: 1;
  height: 100%;
`

const MenuOverlay = styled.div`
  position: fixed;
  /* left on CSS TRANSITION */
  right: 0;
  bottom: 0;
  top: 0;
`

export default function Navigation(props) {
  const transitionRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    // turn off overflow if menu open
    if (menuOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [menuOpen])

  return (
    <>
      <Container>
        {/* MOBILE VIEW */}
        <CSSTransition
          nodeRef={transitionRef}
          in={menuOpen}
          appear={true}
          timeout={300}
          classNames={"menu-transition"}
          unmountOnExit
        >
          <MenuOverlay ref={transitionRef}>
            <MenuContainer>
              <Row hEnd style={{ justifyContent: "flex-end", minHeight: 40 }}>
                <IoMdClose
                  size={28}
                  onClick={() => {
                    setMenuOpen(false)
                  }}
                />
              </Row>
              <Column>
                <a href={`#about`} onClick={closeMenu}>
                  <NavButton>About</NavButton>
                </a>
                <a href={`#experience`} onClick={closeMenu}>
                  <NavButton>Experience</NavButton>
                </a>
                <a href={`#project`} onClick={closeMenu}>
                  <NavButton>Project</NavButton>
                </a>
                <a href={`#contact`} onClick={closeMenu}>
                  <NavButton>Contact</NavButton>
                </a>
              </Column>
            </MenuContainer>
          </MenuOverlay>
        </CSSTransition>

        {/* WEB VIEW */}
        <LogoContainerLink href={`#about`}>
          <LogoImage>
            <ResponsiveImg src={RDPLogo} />
          </LogoImage>

          <Text style={{ marginLeft: 10, fontWeight: 500 }}>
            Rizky Dwiputra
          </Text>
        </LogoContainerLink>

        <NavButtonContainer>
          <a href={`#about`}>
            <NavButton>About</NavButton>
          </a>
          <a href={`#experience`}>
            <NavButton>Experience </NavButton>
          </a>
          <a href={`#project`}>
            <NavButton>Project </NavButton>
          </a>
          <a href={`#contact`}>
            <NavButton>Contact </NavButton>
          </a>
        </NavButtonContainer>
        <HamburgerMenuContainer>
          <AiOutlineMenu
            size={28}
            onClick={() => {
              setMenuOpen(true)
            }}
          />
        </HamburgerMenuContainer>
      </Container>
    </>
  )
}
