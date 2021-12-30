import React from "react"
import styled from "styled-components"
import Text from "components/Text"
import { mediumDevice, smallDevice } from "config"
import ResponsiveImg from "components/ResponsiveImage"
import ProfilePicture from "assets/img/profile-picture.png"
import { color } from "config"

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
  color: #fff;
`

const LeftContainer = styled(Container)`
  background-color: #f4f4f4;
  @media (max-width: ${mediumDevice}px) {
    padding: 20px;
    padding-top: 40px;
  }
`

const RightContainer = styled(Container)`
  background-color: #2b2b2b;
  @media (max-width: ${mediumDevice}px) {
    padding: 20px;
    padding-bottom: 40px;
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

const RightWrapper = styled(Column)`
  flex: 1;
  justify-content: center;
  padding: 15%;
  @media (max-width: ${mediumDevice}px) {
    padding: 0;
  }
`

const LeftWrapper = styled(Column)`
  padding: 60px;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: ${mediumDevice}px) {
    padding: 0;
    max-width: 500px;
  }
`

const NormalText = styled(Text)`
  line-height: 2;
  font-size: 20px;
  @media (max-width: ${mediumDevice}px) {
    line-height: 1.5;
  }
`

export function AboutMeLeft({ containerStyle }) {
  return (
    <LeftContainer style={containerStyle}>
      <LeftWrapper>
        <ResponsiveImg src={ProfilePicture} objectFit={"cover"} alt="profile" />
      </LeftWrapper>
    </LeftContainer>
  )
}

export function AboutMeRight({ containerStyle }) {
  return (
    <RightContainer style={containerStyle}>
      <RightWrapper>
        <BigText style={{ marginBottom: 30 }}>Hi, i'm Rizky Dwiputra</BigText>
        <NormalText style={{ marginBottom: 30, color: color.greyText }}>
          I'am front end software engineer that have experiences on building web
          or mobile applications with JavaScript, and still trying to expanding
          my knowledge and learning new technologies to develop a high quality
          software to end user.
        </NormalText>
      </RightWrapper>
    </RightContainer>
  )
}
