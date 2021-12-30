import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : "cover")};
  border-radius: inherit;
`

const ResponsiveImg = ({
  width = 100,
  height = 100,
  style,
  src,
  alt,
  objectFit = "cover",
}) => {
  return (
    <Container
      style={{ width: `${width}%`, paddingTop: `${height}%`, ...style }}
    >
      <Image alt={alt || src} src={src} objectFit={objectFit} />
    </Container>
  )
}

export default ResponsiveImg
