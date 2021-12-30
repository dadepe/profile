import React from "react"
import styled from "styled-components"
import Spinner from "./Spinner"
import { color } from "config"

const Container = styled.button`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  background-color: ${color.blue};
  border-radius: 5px;
`

const Text = styled.span`
  color: ${color.white};
  font-weight: 500;
`

export default function Button({
  text,
  onClick,
  containerStyle,
  textStyle,
  isLoading,
  className,
  isDisabled,
  loadingColor,
}) {
  return (
    <Container
      style={{
        ...containerStyle,
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? "default" : "pointer",
      }}
      className={className}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {!isLoading ? (
        <Text style={textStyle}>{text}</Text>
      ) : (
        <Spinner size={16} color={loadingColor || "#fff"} />
      )}
    </Container>
  )
}
