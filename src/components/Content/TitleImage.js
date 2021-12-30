import React from "react"
import styled from "styled-components"
import Text from "components/Text"
import { mediumDevice, smallDevice } from "config"
import ResponsiveImg from "components/ResponsiveImage"

const Row = styled.div`
  display: flex;
`

const Column = styled(Row)`
  flex-direction: column;
`

const Container = styled(Column)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled(Container)`
  @media (max-width: ${mediumDevice}px) {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "#fff"};
  }
`

const TitleContainer = styled(Container)`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};
  @media (max-width: ${mediumDevice}px) {
    padding: 20px;
    padding-bottom: 40px;
    order: 2;
  }
`

const BigText = styled.span`
  white-space: pre-line;
  font-size: 40px;
  margin-bottom: 10px;

  @media (max-width: ${mediumDevice}px) {
    font-size: 35px;
  }

  @media (max-width: ${smallDevice}px) {
    font-size: 30px;
  }
`

const TitleWrapper = styled(Column)`
  flex: 1;
  padding: 15%;
  @media (max-width: ${mediumDevice}px) {
    padding: 0;
  }
`

const ImageWrapper = styled(Column)`
  display: ${({ showOnWeb }) => (showOnWeb ? "flex" : "none")};
  flex: 1;
  width: 100%;
  @media (max-width: ${mediumDevice}px) {
    display: flex;
  }
`

const NormalText = styled(Text)`
  line-height: 2;
  font-size: 20px;
  @media (max-width: ${mediumDevice}px) {
    line-height: 1.5;
  }
`

const LinkButton = styled.a`
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  border-bottom: thin solid #000;
  color: #000;
  font-size: 24;
  font-weight: 500;
`

export function TitleContent({
  containerStyle,
  title = "Title",
  subTitle = " SUB Title",
  linkData,
  backgroundColor,
}) {
  return (
    <TitleContainer backgroundColor={backgroundColor} style={containerStyle}>
      <TitleWrapper>
        <BigText style={{ marginBottom: 30 }}>{title}</BigText>
        <NormalText style={{ marginBottom: 30 }}>{subTitle}</NormalText>

        {linkData && (
          <LinkButton
            href={linkData.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkData.title}
          </LinkButton>
        )}
      </TitleWrapper>
    </TitleContainer>
  )
}

export function ImageContent({
  containerStyle,
  wrapperStyle,
  img,
  backgroundColor,
  showOnWeb,
  objectFit,
}) {
  return (
    <ImageContainer backgroundColor={backgroundColor} style={containerStyle}>
      <ImageWrapper style={wrapperStyle} showOnWeb={showOnWeb}>
        <ResponsiveImg src={img} objectFit={objectFit} alt={img} />
      </ImageWrapper>
    </ImageContainer>
  )
}
