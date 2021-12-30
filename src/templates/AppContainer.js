import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled(Column)`
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

const Content = styled(Column)`
  flex: 1;
  width: 100%;
  /* height: 100vh; */
  min-width: 320px;
`

export default function AppContainer({
  children,
  containerStyle,
  contentStyle,
}) {
  return (
    <Container style={containerStyle}>
      <Content style={contentStyle}>{children}</Content>
    </Container>
  )
}
