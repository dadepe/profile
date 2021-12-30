import React from "react"
import styled from "styled-components"
import Spinner from "components/Spinner"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Text = styled.span`
  font-weight: 700;
`

export default function ComponentLoadingWrapper({
  children,
  isLoading,
  noData,
  containerStyle,
  EmptyComponent,
  emptyText = "No Data",
}) {
  return isLoading ? (
    <Container style={containerStyle}>
      <Spinner size={40} color={"#008dfd"} />
    </Container>
  ) : noData ? (
    <Container style={containerStyle}>
      {EmptyComponent ? <EmptyComponent /> : <Text>{emptyText}</Text>}
    </Container>
  ) : (
    children
  )
}
