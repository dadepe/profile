import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Navigation from "components/Navigation"
import { webContentMaxWidth } from "config"

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
`

const Container = styled(Column)`
  flex: 1;
  position: relative;
`

const NavContainer = styled(Row)`
  height: 60px;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  -webkit-box-shadow: 0 1px 0 rgb(0 0 0 / 3%), 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 0 rgb(0 0 0 / 3%), 0 1px 1px rgb(0 0 0 / 5%);
  background-color: #f8f8f8;
  @media (max-width: ${webContentMaxWidth}px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`

const ContentContainer = styled(Column)`
  margin-top: 60px;
  flex: 1;
  position: relative;
  max-width: ${webContentMaxWidth}px;
  /* margin: auto; */
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

const ContainerWithNav = React.memo(({ children, containerStyle }) => {
  return (
    <Container>
      <NavContainer
        style={{
          ...containerStyle,
        }}
      >
        <Navigation />
      </NavContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
})

export default ContainerWithNav
