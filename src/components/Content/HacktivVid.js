import React from "react"
import styled from "styled-components"
import Text from "components/Text"
import { mediumDevice, smallDevice } from "config"
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
  min-height: 400px;
`

const RightContainer = styled(Container)`
  background-color: ${color.orange};
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
  padding: 15%;
  @media (max-width: ${mediumDevice}px) {
    padding: 0;
  }
`

const LeftWrapper = styled(Column)`
  flex: 1;
  width: 100%;
`

const NormalText = styled(Text)`
  line-height: 2;
  font-size: 20px;
  @media (max-width: ${mediumDevice}px) {
    line-height: 1.5;
  }
`

export function HacktivVidLeft({ containerStyle }) {
  return (
    <LeftContainer style={containerStyle}>
      <LeftWrapper>
        <iframe
          title="final-project"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/VtjCqcBnKiQ"
        ></iframe>
      </LeftWrapper>
    </LeftContainer>
  )
}

export function HacktivVidRight({ containerStyle }) {
  return (
    <RightContainer style={containerStyle}>
      <RightWrapper>
        <BigText style={{ marginBottom: 30 }}>Hacktiv8 Final Project</BigText>
        <NormalText style={{ marginBottom: 30 }}>
          My group final project at Hacktiv8, Verball. {"\n\n"} Verball is a
          futsal match finder application where people could create a match
          schedule and play with another team
        </NormalText>
      </RightWrapper>
    </RightContainer>
  )
}
